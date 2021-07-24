import "tailwindcss/tailwind.css";
import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "src/lib/AuthContext";
import { Layout } from "src/components/Layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
