import { useRouter } from "next/router";
import { useEffect, useState, VFC } from "react";
import { auth } from "src/lib/firebase";

const Register: VFC = () => {
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

  //登録機能
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const register = async (e: any) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      router.push("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  //ユーザー認証に変更がある場合呼ばれる。ユーザー情報がある場合、ページ遷移する。
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && router.push("/");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="emai" onChange={onChangeEmail} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={onChangePassword} />
        <button type="submit" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
