import style from "./TodoList.module.scss";
import TodoElement from "./TodoElement";

function TodoList({ todoElements, deleteTodo, refreshTodoStatus }) {
  return (
    <div className={style.todoList}>
      {todoElements.map((todoElement) => (
        <TodoElement todoElement={todoElement} key={todoElement.id} deleteTodo={deleteTodo} refreshTodoStatus={refreshTodoStatus} />
      ))}
    </div>
  );
}

export default TodoList;
