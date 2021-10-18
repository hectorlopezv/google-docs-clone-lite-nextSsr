import type { NextPage } from "next";
import {
  getProviders,
  getSession,
  signIn as SignIntoProvider,
} from "next-auth/react";
import Login from "../../components/Login";

interface props {
  providers: any;
}

const SignIn: NextPage<props> = ({ providers }) => {
  // {Object.values(providers).map((provider: any) => (
  //   <div key={provider.name}>
  //     <button
  //       onClick={() =>
  //         SignIntoProvider(provider.id, {
  //           callbackUrl: "/",
  //         })
  //       }
  //     >
  //       Sing in with{provider.name}
  //     </button>
  //   </div>
  // ))}
  return <Login />;
};

export default SignIn;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
