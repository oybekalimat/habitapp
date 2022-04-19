import { Link } from "react-router-dom";

import {
  Modal,
  PageContainer,
  PageHeader,
  PageCloseButton,
  GoogleLoginButton,
  Input,
  Button,
  GoogleLogin,
} from "../../components";
import { useAuthControllerGoogleAuth } from "../../generated/api";

export function RegisterPage() {
  const googleAuthMutation = useAuthControllerGoogleAuth();

  function handleGoogleRegister(email: string) {
    googleAuthMutation.mutate({
      data: {
        tempUserId: "",
        email,
      },
    });
  }

  return (
    <Modal isOpen={true} onClose={() => {}}>
      <PageContainer>
        <PageHeader>
          <div className="flex flex-row-reverse justify-between items-center">
            <PageCloseButton />
          </div>
        </PageHeader>
        <h1 className="text-base text-gray-900 font-bold text-center mb-2 pt-32">
          Register new account
        </h1>
        <p className="mb-5 text-center text-xs text-gray-500">
          Your data is saved locally
          <br />
          Sign up to sync between devices
        </p>
        <GoogleLogin onLogin={handleGoogleRegister}>
          <GoogleLoginButton mb="9">Sign up with Google</GoogleLoginButton>
        </GoogleLogin>

        <form className="flex flex-col">
          <Input label="Email" type="email" className="mb-4" />
          <Input label="Password" type="password" className="mb-6" />
          <Button className="bg-primary-600 p-2 text-white text-base mb-10">
            Register
          </Button>
        </form>
        <div className="text-center">
          <Link className="text-primary-600 underline" to="/login">
            Already have an account?
          </Link>
        </div>
      </PageContainer>
    </Modal>
  );
}
