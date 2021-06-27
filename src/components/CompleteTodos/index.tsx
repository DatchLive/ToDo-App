import styles from "src/styles/styles.module.css";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className={styles.completearea}>
      <p className={styles.title}>完了のToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className={styles.listrow}>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
