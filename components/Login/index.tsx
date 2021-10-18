import { FC } from "react";
import Button from "@material-tailwind/react/Button";
import Image from "next/image";
import { signIn } from "next-auth/react";
interface props {}
const Login: FC<props> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/images/google.webp"
        height={330}
        width={550}
        objectFit="contain"
      />

      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={() =>
          signIn("google", {
            callbackUrl: "/",
          })
        }
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
