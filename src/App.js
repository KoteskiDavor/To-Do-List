import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //function events

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;

        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;

        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <div className="App">
      {/* Top right choose theme color  */}

      {/* Input the task */}
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        status={status}
        setStatus={setStatus}
      />
      {/* List of task's  */}

      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
      {/* down the page */}
      {/* Type long term goals */}
      {/* saved in list (note ) */}
      {/* Type time period when will you complete it (in the goals the same )  */}
    </div>
  );
}

export default App;
