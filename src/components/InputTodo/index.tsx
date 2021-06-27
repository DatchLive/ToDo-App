import styles from "src/styles/styles.module.css";

export const InputTodo = (props) => {
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
