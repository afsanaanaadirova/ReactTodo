import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function Todos() {
  const [todo, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(0);

  //delete all todos
  const handlerDelete = () => {
    setTodos([]);
    setCount(0);
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
            <Todo
              key={index}
              text={element.text}
              id={element.id}
              count={count}
              setCount={setCount}
              completed={element.completed}
              todo={todo}
              setTodos={setTodos}
            />
          ))}
      </ul>
      <div className="footer">
        <span>
          <span>Ümumi {todo.length} tapşırıq</span>
          <span>Hazır: {count} tapşırıq</span>
        </span>
        <button onClick={handlerDelete}>Hamısını sil</button>
      </div>
    </div>
  );
}

export default Todos;
