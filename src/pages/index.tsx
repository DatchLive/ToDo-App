import { useEffect, useState } from "react";
import { InputTodo } from "src/components/InputTodo";
import { IncompleteTodos } from "src/components/IncompleteTodos";
import { CompleteTodos } from "src/components/CompleteTodos";
import type { NextPage } from "next";
import { auth } from "src/lib/firebase";
import { useRouter } from "next/router";
import { User } from "@firebase/auth-types";
import { Button } from "@vechaiui/react";

const Home: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : router.push("/login");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logOut = async () => {
    try {
      await auth.signOut();
      router.push("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  //タスク入力
  const [todoText, setTodoText] = useState("");
  //未完了タスク
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  //完了タスク
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return; //タスク未入力状態ではタスク追加しない。
    if (incompleteTodos.some((item) => item === todoText)) {
      alert("同じタスクは追加できません。");
      return; //同名のタスクは入力禁止
    }
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index: number) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index: number) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <h1 className="mb-4 text-xl font-bold text-center">
        <span className="border-b-2 border-black ">Simple ToDo</span>
      </h1>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p className="mb-4 font-bold text-red-500">
          You can register up to 5 items.
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
      <Button
        type="submit"
        onClick={logOut}
        className="block m-auto mb-4 border-2 cursor-pointer hover:opacity-50"
      >
        Logout
      </Button>
    </>
  );
};

export default Home;
