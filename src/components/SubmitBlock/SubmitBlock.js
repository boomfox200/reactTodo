import { useState } from "react";
import style from "./SubmitBlock.module.scss";

function SubmitBlock({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = event.target.elements[0].value;
    todo.length > 0 && addTodo(todo);
    setText("");
  };

  return (
    <div className={style.submitBlock}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new todo"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default SubmitBlock;
