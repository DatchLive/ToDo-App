import styles from "src/styles/styles.module.css";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className={styles.inputarea}>
      <input placeholder="ToDoを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
