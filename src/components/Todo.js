import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

function Todo({ text, todo, setTodos, completed, id, setCount, count }) {
  const [number, setNumber] = useState(0);

  useEffect((e) => {
    setNumber(Math.floor(Math.random() * 100 + 1));
  }, []);

  const handlerDeleteOneByeOne = () => {
    setCount((count) =>
      todo.find((el) => el.id === id).completed ? count - 1 : count
    );
    setTodos(todo.filter((element) => element.id !== id));
  };
  //complete todo
  const completeHandler = (e) => {
    setTodos(
      todo.map((item) => {
        if (item.id === id) {
          if (!item.completed) {
            setCount(count + 1);
          } else {
            setCount(count - 1);
          }
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };
  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <span>
        <div className="checkbox">
          <input type="checkbox" name="" id={number} />
          <label htmlFor={number} onClick={completeHandler}></label>
        </div>
        {text}
      </span>
      <FaRegTrashAlt className="trash-icon" onClick={handlerDeleteOneByeOne} />
    </li>
  );
}

export default Todo;
