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
      <p className="text-xl font-bold mb-2">未完了のToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="flex mb-4 justify-between">
              <li>{todo}</li>
              <div>
                <Button
                  className="border-2"
                  size="sm"
                  onClick={() => onClickComplete(index)}
                >
                  完了
                </Button>
                <Button
                  className="border-2 ml-1"
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
