import { useRouter } from "next/router";
import { useEffect, useState, VFC } from "react";
import { auth } from "src/lib/firebase";
import Link from "next/link";
import { Button, Input } from "@vechaiui/react";

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
      <form>
        <label htmlFor="email">Email</label>
        <Input id="email" type="emai" onChange={onChangeEmail} />
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          type="password"
          onChange={onChangePassword}
          className="mb-6"
        />
        <Button type="submit" onClick={logIn} className="block m-auto mb-4">
          Login
        </Button>
      </form>
      <Button className="block m-auto">
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Button>
    </>
  );
};

export default Login;
