import { useState } from "react";
import style from "./TodoElement.module.css";

function TodoElement({ todoElement, index, deleteTodo }) {
  const [isElementStyle, setIsElementStyle] = useState(style.todoElement);
  const [isDoneText, setIsDoneText] = useState("Done");

  const handleDone = () => {
    if (isElementStyle === style.todoElement) {
      setIsElementStyle(style.todoElementDone);
      setIsDoneText("Undone");
      todoElement.isDone = true;
    } else {
      setIsElementStyle(style.todoElement);
      setIsDoneText("Done");
      todoElement.isDone = false;
    }
  };

  const handleDelete = () => {
    deleteTodo(todoElement.id);
  };

  return (
    <div className={isElementStyle}>
      <div className={style.todoText}>{todoElement.text}</div>
      <div>
        <button className={style.buttonDone} onClick={handleDone}>
          {isDoneText}
        </button>
        <button className={style.buttonDelete} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoElement;
