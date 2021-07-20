import { useState } from "react";
import { InputTodo } from "src/components/InputTodo";
import { IncompleteTodos } from "src/components/IncompleteTodos";
import { CompleteTodos } from "src/components/CompleteTodos";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [todoText, setTodoText] = useState("");

  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);

  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
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
      <div className="max-w-screen-sm m-auto">
        <div className="m-4 ">
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
        </div>
      </div>
    </>
  );
};
export default Home;
