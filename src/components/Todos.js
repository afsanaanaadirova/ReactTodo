import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import noTask from "../assests/images/noTask.png";

function Todos() {
  const [todo, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  //delete all todos
  const handlerDelete = () => {
    setTodos([]);
  };
  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos(todo);
  }, [todo]);

  //Save to Local Store
  const saveLocalTodos = (todo) => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todo"));
      setTodos(todoLocal);
    }
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
        {todo.length <= 0 ? (
          <div className="emptyTodo">
            <img src={noTask} alt="" />
            <p>Heç bir tapşırıq yoxdur</p>
          </div>
        ) : (
          todo &&
          todo.map((element, index) => (
            <Todo
              key={index}
              text={element.text}
              id={element.id}
              completed={element.completed}
              todo={todo}
              setTodos={setTodos}
            />
          ))
        )}
      </ul>
      <div className="footer">
        <span>
          <span>Ümumi {todo.length} tapşırıq</span>
          <span>
            Hazır: {todo.filter((x) => x.completed === true).length} tapşırıq
          </span>
        </span>
        <button onClick={handlerDelete}>Hamısını sil</button>
      </div>
    </div>
  );
}

export default Todos;
