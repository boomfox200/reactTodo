import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import SubmitBlock from "./components/SubmitBlock/SubmitBlock";
import TodoList from "./components/TodoBlock/TodoList";
import "./App.scss";
import FunctionBlock from "./components/FunctionBlock/FunctionBlock";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (text) => {
    const newTodoList = {
      text,
      isDone: false,
      id: uuidv4(),
    };

    setTodoList([...todoList, newTodoList]);
  };

  const deleteTodoDoneHandler = () => {
    setTodoList(todoList.filter((todoElement) => todoElement.isDone === false));
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
