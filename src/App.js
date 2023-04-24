import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import SubmitBlock from "./components/SubmitBlock";
import TodoList from "./components/TodoBlock/TodoList";
import "./App.css";

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

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((todoElement) => todoElement.id !== index));
  };

  return (
    <div className="App">
      <Header />
      <SubmitBlock addTodo={addTodo} />
      <TodoList todoElements={todoList} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
