import React from "react";
import { FaPlus } from "react-icons/fa";

function TodoForm({ inputText, setInputText, todo, setTodos }) {
  // put imput changes value
  const handlerChanges = (e) => {
    setInputText(e.target.value);
  };
  //when form submit stop page refresh, add new todo,increase count, empty input
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!inputText) {
      alert("Please add todo");
    } else {
      setTodos([
        ...todo,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
  };

  return (
    <div className="Form-Input">
      <h1>TODO</h1>
      <form onSubmit={handlerSubmit}>
        <input
          value={inputText}
          onChange={handlerChanges}
          placeholder="Tapşırığı daxil edin"
          className="Input-Add "
        />
        <button className="Add-Btn">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
