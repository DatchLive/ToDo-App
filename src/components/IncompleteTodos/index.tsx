import styles from "src/styles/styles.module.css";
import type { VFC } from "react";

type Props = {
  todos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export const IncompleteTodos: VFC<Props> = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className={styles.incompletearea}>
      <p className={styles.title}>未完了のToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className={styles.listrow}>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};