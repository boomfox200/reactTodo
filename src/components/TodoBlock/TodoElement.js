import { statusList } from "../../data/statusList";
import style from "./TodoElement.module.scss";

function TodoElement({ todoElement, index, deleteTodo, refreshTodoStatus }) {

  const handleSelect = (elem) => {
    todoElement.statusTask = elem.target.value;
    refreshTodoStatus(todoElement);
  };

  const handleDelete = () => {
    deleteTodo(todoElement.id);
  };

  return (
    <div className={style[todoElement.statusTask]}>
      <div className={style.todoText}>{todoElement.text}</div>
      <div>
        <select className={style.selectStatus} value={todoElement.statusTask} onChange={handleSelect}>
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
