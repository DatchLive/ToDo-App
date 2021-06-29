import styles from "src/styles/styles.module.css";
import type { VFC } from "react";

type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
};

export const InputTodo: VFC<Props> = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className={styles.inputarea}>
      <input
        disabled={disabled}
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
