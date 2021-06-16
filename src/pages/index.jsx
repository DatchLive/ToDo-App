import { useState } from "react";
import styles from "src/styles/styles.module.css";

export default function Home() {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい",
  ]);

  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  return (
    <>
      <div className={styles.inputarea}>
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>

      <div className={styles.incompletearea}>
        <p className={styles.title}>未完了のToDo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className={styles.listrow}>
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className={styles.completearea}>
        <p className={styles.title}>完了のToDo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className={styles.listrow}>
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
