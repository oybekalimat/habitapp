/**
 * Generated by orval v6.7.1 🍺
 * Do not edit manually.
 * Habit App
 * Habit App made by Oybek Alimatov
 * OpenAPI spec version: 1.0.0
 */
import axios,{
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
export interface EditHabitInput { [key: string]: any }

export interface CreateHabitInput { [key: string]: any }

export interface Habit {
  userId: string;
  title: string;
  isoWeekdays: number[];
  dateCreated: number;
  archived: boolean;
  currentStreakDates: number[];
  longestStreakDates: number[];
}

export interface GoogleAuthInput { [key: string]: any }

export interface RegisterUserInput { [key: string]: any }

export interface LoginInput { [key: string]: any }




  export const appControllerGetHello = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/`,options
    );
  }

export const authControllerTempRegister = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/auth/temp-register`,undefined,options
    );
  }

export const authControllerLogin = <TData = AxiosResponse<void>>(
    loginInput: LoginInput, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/auth/login`,
      loginInput,options
    );
  }

export const authControllerRegister = <TData = AxiosResponse<void>>(
    registerUserInput: RegisterUserInput, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/auth/register`,
      registerUserInput,options
    );
  }

export const authControllerGoogleAuth = <TData = AxiosResponse<void>>(
    googleAuthInput: GoogleAuthInput, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/auth/google`,
      googleAuthInput,options
    );
  }

export const userControllerCurrentUser = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/user/current-user`,options
    );
  }

export const habitControllerFindAllByUserId = <TData = AxiosResponse<unknown>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/habits`,options
    );
  }

export const habitControllerCreateHabit = <TData = AxiosResponse<void>>(
    createHabitInput: CreateHabitInput, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/habits/create`,
      createHabitInput,options
    );
  }

export const habitControllerEditHabit = <TData = AxiosResponse<void>>(
    id: string,
    editHabitInput: EditHabitInput, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.put(
      `/habits/${id}`,
      editHabitInput,options
    );
  }

export const habitControllerDeleteHabit = <TData = AxiosResponse<void>>(
    id: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.delete(
      `/habits/${id}`,options
    );
  }

export type AppControllerGetHelloResult = AxiosResponse<void>
export type AuthControllerTempRegisterResult = AxiosResponse<void>
export type AuthControllerLoginResult = AxiosResponse<void>
export type AuthControllerRegisterResult = AxiosResponse<void>
export type AuthControllerGoogleAuthResult = AxiosResponse<void>
export type UserControllerCurrentUserResult = AxiosResponse<void>
export type HabitControllerFindAllByUserIdResult = AxiosResponse<unknown>
export type HabitControllerCreateHabitResult = AxiosResponse<void>
export type HabitControllerEditHabitResult = AxiosResponse<void>
export type HabitControllerDeleteHabitResult = AxiosResponse<void>