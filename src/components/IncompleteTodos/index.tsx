import type { VFC } from "react";
import { Button } from "@vechaiui/react";

type Props = {
  todos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export const IncompleteTodos: VFC<Props> = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="mb-8">
      <p className="mb-2 text-xl font-bold">Incomplete ToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="flex items-center justify-between mb-4">
              <li>{todo}</li>
              <div>
                <Button
                  className="border-2 cursor-pointer hover:opacity-50"
                  size="sm"
                  onClick={() => onClickComplete(index)}
                >
                  完了
                </Button>
                <Button
                  className="ml-1 border-2 cursor-pointer hover:opacity-50"
                  size="sm"
                  onClick={() => onClickDelete(index)}
                >
                  削除
                </Button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
