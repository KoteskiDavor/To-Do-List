import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "./Form.css";

const Form = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  status,
  setStatus,
}) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText();
  };
  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form className="todolist">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button
        disabled={!inputText}
        onClick={submitTodoHandler}
        type="submit"
        className="todo-button"
      >
        <AddBoxIcon />
      </button>
      <div className="progress">
        <select
          onChange={statusHandler}
          name="todo-list"
          className="check-progress"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
