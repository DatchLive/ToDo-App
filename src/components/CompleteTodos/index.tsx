import styles from "src/styles/styles.module.css";
import type { VFC } from "react";

type Props = {
  todos: string[];
  onClickBack: (index: number) => void;
};

export const CompleteTodos: VFC<Props> = (props) => {
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
