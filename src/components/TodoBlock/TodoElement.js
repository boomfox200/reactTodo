import { useState } from "react";
import { statusList } from "../../data/statusList";
import style from "./TodoElement.module.scss";

function TodoElement({ todoElement, index, deleteTodo }) {
  const [isElementStyle, setIsElementStyle] = useState(style.todoElement);

  const handleSelect = (elem) => {
    todoElement.statusTask = elem.target.value;
    setIsElementStyle(style[elem.target.value]);
  };

  const handleDelete = () => {
    deleteTodo(todoElement.id);
  };

  return (
    <div className={isElementStyle}>
      <div className={style.todoText}>{todoElement.text}</div>
      <div>
        <select className={style.selectStatus} onChange={handleSelect}>
          {statusList.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
        <button className={style.buttonDelete} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoElement;
