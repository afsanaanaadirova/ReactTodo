import React from "react";
import { FaTrash, FaRegCircle } from "react-icons/fa";

function Todo({ text, deleteOnbyONe }) {
  return (
    <li>
      <span>
        <FaRegCircle className="Input-check" /> {text}
      </span>
      <FaTrash onClick={deleteOnbyONe} className="trash" />
    </li>
  );
}

export default Todo;
