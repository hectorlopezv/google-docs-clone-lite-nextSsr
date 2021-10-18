import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import type { AppProps } from "next/app";
import "../styles/styles.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
export default MyApp;
