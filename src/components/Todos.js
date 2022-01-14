import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function Todos() {
  const [todo, settodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(0);

  //delete all todos,empty counter
  const handlerDelete = () => {
    const newTodo = [...todo];
    var filtered = newTodo.filter(function (value) {
      return value > 0;
    });
    settodos(filtered);
    setCount(0);
  };
  const deleteOnbyONe = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    settodos(newTodo);
    setCount(count - 1);
  };
  return (
    <div>
      <TodoForm
        todo={todo}
        settodos={settodos}
        inputText={inputText}
        setInputText={setInputText}
        count={count}
        setCount={setCount}
      />
      <ul className="todo-list">
        {todo &&
          todo.map((element, index) => (
            <Todo
              key={index}
              text={element.text}
              deleteOnbyONe={deleteOnbyONe}
            />
          ))}
      </ul>
      <div className="footer">
        <span>Ümumi {count} tapşırıq</span>
        <button onClick={handlerDelete}>Hamısını sil</button>
      </div>
    </div>
  );
}

export default Todos;
