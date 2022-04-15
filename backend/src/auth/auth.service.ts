import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  InternalServerErrorException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Error } from "mongoose";

import { LoginInput, RegisterUserInput } from "./auth.dto";
import { UserService } from "../user/user.service";
import { AuthHelper } from "./auth.helper";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private authHelper: AuthHelper,
  ) {}

  async login(loginUserInput: LoginInput) {
    const user = await this.userService.findByEmail(loginUserInput.email);

    if (!user) {
      throw new UnauthorizedException("Incorrect email or password!");
    }

    const isValidPassword = this.authHelper.validatePassword(
      loginUserInput.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new UnauthorizedException("Incorrect email or password!");
    }

    const accessToken = this.jwtService.sign(
      { userId: user._id },
      {
        expiresIn: "30 days",
      },
    );

    return { accessToken };
  }

  async register(registerUserInput: RegisterUserInput) {
    const { password, email, tempUserId } = registerUserInput;
    const hashedPassword = await this.authHelper.hashPassword(password);

    try {
      const user = await this.userService.setTempUserAsRegistered(tempUserId, {
        email,
        password: hashedPassword,
      });

      const accessToken = this.jwtService.sign(
        { userId: user._id },
        {
          expiresIn: "30 days",
        },
      );

      return { accessToken };
    } catch (err) {
      const isNonUniqueError = err.name === "MongoError" && err.code === 11000;

      if (isNonUniqueError) {
        new BadRequestException("User already exists");
      }

      console.error(err);
      throw new InternalServerErrorException();
    }
  }

  async registerTempUser() {
    const tempUser = await this.userService.createTempUser();

    const accessToken = this.jwtService.sign({ userId: tempUser._id });

    return { accessToken };
  }
}
