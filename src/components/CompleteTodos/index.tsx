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
      <p className="mb-2 text-xl font-bold">Complete ToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="flex items-center justify-between mb-4">
              <li>{todo}</li>
              <Button
                className="border-2 cursor-pointer hover:opacity-50"
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
