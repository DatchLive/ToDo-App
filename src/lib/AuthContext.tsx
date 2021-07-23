import { User } from "@firebase/auth-types";
import { createContext, useEffect, useState, FC } from "react";
import { auth } from "src/lib/firebase";

type AuthContextType = {
  currentUser: User | null | undefined;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: undefined,
});

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  //ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  //下階層のコンポーネントをラップする
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
