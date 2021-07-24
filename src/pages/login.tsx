import { useRouter } from "next/router";
import { useEffect, useState, VFC } from "react";
import { auth } from "src/lib/firebase";
import Link from "next/link";
import { Button } from "@vechaiui/react";
import { InputFrom } from "src/components/InputForm";
import { PrimaryButton } from "src/components/PrimaryButton";

const Login: VFC = () => {
  const router = useRouter();

  //email, password入力機能
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  //ユーザー認証に変更がある場合呼ばれる。ユーザー情報がある場合、ページ遷移する。
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && router.push("/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //ログイン機能
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logIn = async (e: any) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1 className="mb-4 text-xl font-bold text-center">
        <span className="border-b-2 border-black ">Login</span>
      </h1>
      <form>
        <InputFrom type="email" onChange={onChangeEmail} />
        <InputFrom type="password" onChange={onChangePassword} />
        <div className="mb-6 text-center">
          <PrimaryButton onClick={logIn}>Login</PrimaryButton>
        </div>
      </form>
      <Button className="block m-auto border-2 cursor-pointer hover:opacity-50">
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Button>
    </>
  );
};

export default Login;
