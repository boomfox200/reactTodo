import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import SubmitBlock from "./components/SubmitBlock/SubmitBlock";
import TodoList from "./components/TodoBlock/TodoList";
import FunctionBlock from "./components/FunctionBlock/FunctionBlock";
import { statusList } from "./data/statusList";
import "./App.scss";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState(statusList[0].value);

  const addTodo = (text) => {
    const newTodoList = {
      text,
      statusTask: status,
      id: uuidv4(),
    };

    setTodoList([...todoList, newTodoList]);
  };

  const deleteTodoDoneHandler = () => {
    setTodoList(todoList.filter((todoElement) => todoElement.statusTask !== "done"));
  };

  const deleteTodoAllHandler = () => {
    setTodoList([]);
  };

  const deleteTodoHandler = (index) => {
    setTodoList(todoList.filter((todoElement) => todoElement.id !== index));
  };

  return (
    <div className="App">
      <Header />
      <SubmitBlock addTodo={addTodo} />
      <FunctionBlock deleteTodoDone={deleteTodoDoneHandler} deleteTodoAll={deleteTodoAllHandler} />
      <TodoList todoElements={todoList} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
