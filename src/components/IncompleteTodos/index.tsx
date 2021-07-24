import type { VFC } from "react";
import { PrimaryButton } from "src/components/PrimaryButton";

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
                <PrimaryButton size="sm" onClick={() => onClickComplete(index)}>
                  完了
                </PrimaryButton>
                <span className="ml-1">
                  <PrimaryButton size="sm" onClick={() => onClickDelete(index)}>
                    削除
                  </PrimaryButton>
                </span>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
