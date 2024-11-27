import PropTypes from "prop-types";

import Button from "./Button.jsx";
import { useState } from "react";

export default function TodoForm({ onClick }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="todo-form">
      <h2>New todo</h2>
      <div className="todo-input">
        <input
          type="text"
          placeholder="New todo"
          value={inputValue}
          // Actualizar el estado local
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* Llama a onClick (que es handleClick) con el valor del input */}
        <Button
          content="New todo"
          onClick={() => {
            if (inputValue.trim() === "") {
              return;
            }

            onClick({ id: Date.now(), text: inputValue });
            setInputValue("");
          }}
        />
      </div>
    </div>
  );
}

TodoForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};
