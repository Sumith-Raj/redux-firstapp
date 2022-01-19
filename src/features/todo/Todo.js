import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, loadingAsync, tododata, todostatus } from "./todoSlice";
import styles from './Todo.module.css';

export function Todo() {
  const [input, setinput] = useState("");

  const dispatch = useDispatch();
  const items = useSelector(tododata);
  const status = useSelector(todostatus);

  return (
    <article style={{ marginTop: "10px" }}>
      <input
        style={{ padding: "10px" }}
        placeholder="Enter task"
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <button className={styles.button} onClick={() => dispatch(add(input))}>
        Add
      </button><button
      className={styles.button}
        title="async button"
        onClick={() => {
          dispatch(loadingAsync(input));
        }}
      >
        {status}
      </button>
      {items?.map((item) => (
        <Fragment key={item.id}>
          <div  className={styles.box}>
          <p>
            {item.item}
            <b
              style={{ color: "red", marginLeft: "10px" }}
              title="delete"
              onClick={() => {
                dispatch(remove(item.id));
              }}
            >
              X
            </b>
          </p>
          </div>
        </Fragment>
      ))}
      
    </article>
  );
}
