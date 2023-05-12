import style from "./TodoList.module.scss";
import TodoElement from "./TodoElement";

function TodoList({ todoElements, deleteTodo }) {
  return (
    <div className={style.todoList}>
      {todoElements.map((todoElement) => (
        <TodoElement todoElement={todoElement} key={todoElement.id} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
