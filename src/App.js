import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header/Header";
import SubmitBlock from "./components/SubmitBlock/SubmitBlock";
import TodoList from "./components/TodoBlock/TodoList";
import FunctionBlock from "./components/FunctionBlock/FunctionBlock";
import FilterBlock from "./components/FilterBlock/FilterBlock";
import { statusList } from "./data/statusList";
import "./App.scss";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState(statusList[0].value);
  const [filter, setFilter] = useState([]);

  const addTodo = (text) => {
    const newTodoList = {
      text,
      statusTask: status,
      id: uuidv4(),
    };

    setTodoList([...todoList, newTodoList]);
    setFilter([...todoList, newTodoList]);
  };

  const refreshTodoStatusHandle = (todoElement) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoElement.id) {
        return todoElement;
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const deleteTodoDoneHandler = () => {
    setTodoList(todoList.filter((todoElement) => todoElement.statusTask !== "done"));

    setFilter(todoList.filter((todoElement) => todoElement.statusTask !== "done"));
  };

  const deleteTodoAllHandler = () => {
    setTodoList([]);

    setFilter([]);
  };

  const deleteTodoHandler = (index) => {
    setTodoList(todoList.filter((todoElement) => todoElement.id !== index));
  };

  const selectFilterHandler = (value) => {
    let filterList = [];
    console.log(value);
    if (value === "All tasks") {
      filterList = filter;
    } else {
      filterList = filter.filter((todoElement) => todoElement.statusTask === value);
    }
    setTodoList(filterList);
  };

  return (
    <div className="App">
      <FilterBlock todoElements={filter} selectFilterHandler={selectFilterHandler} />
      <div className="App__container">
        <Header />
        <SubmitBlock addTodo={addTodo} />
        <FunctionBlock deleteTodoDone={deleteTodoDoneHandler} deleteTodoAll={deleteTodoAllHandler} />
        <TodoList todoElements={todoList} deleteTodo={deleteTodoHandler} refreshTodoStatus={refreshTodoStatusHandle} />
      </div>
    </div>
  );
}

export default App;
