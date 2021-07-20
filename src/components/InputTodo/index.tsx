import type { VFC } from "react";
import { Button, Input } from "@vechaiui/react";

type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
};

export const InputTodo: VFC<Props> = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="flex mb-4">
      <Input
        className="mr-2 border-2 hover:opacity-50"
        disabled={disabled}
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      />
      <Button
        className="border-2 cursor-pointer hover:opacity-50"
        disabled={disabled}
        onClick={onClick}
      >
        追加
      </Button>
    </div>
  );
};
