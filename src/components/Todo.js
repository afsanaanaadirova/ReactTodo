import React from "react";
import { FaRegCircle } from "react-icons/fa";

function Todo({ text }) {
  return (
    <li>
      <span>
        <FaRegCircle className="Input-check" /> {text}
      </span>
    </li>
  );
}

export default Todo;
