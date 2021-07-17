import "tailwindcss/tailwind.css";
import "src/styles/globals.css";
import type { AppProps } from "next/app";
import "src/libs/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
