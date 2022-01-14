import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function Todos() {
  const [todo, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  //delete all todos,empty counter
  const handlerDelete = () => {
    setTodos([]);
  };

  return (
    <div>
      <TodoForm
        todo={todo}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <ul className="todo-list">
        {todo &&
          todo.map((element, index) => (
            <Todo key={index} text={element.text} />
          ))}
      </ul>
      <div className="footer">
        <span>Ümumi {todo.length} tapşırıq</span>
        <button onClick={handlerDelete}>Hamısını sil</button>
      </div>
    </div>
  );
}

export default Todos;
