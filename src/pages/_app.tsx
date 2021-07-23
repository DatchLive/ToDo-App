import "tailwindcss/tailwind.css";
import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "src/lib/AuthContext";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
