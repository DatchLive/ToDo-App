import type { VFC } from "react";
import { Button } from "@vechaiui/react";

type Props = {
  todos: string[];
  onClickBack: (index: number) => void;
};

export const CompleteTodos: VFC<Props> = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div>
      <p className="text-xl font-bold">完了のToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="flex mb-4 justify-between">
              <li>{todo}</li>
              <Button
                className="border-2"
                size="sm"
                onClick={() => onClickBack(index)}
              >
                戻す
              </Button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
