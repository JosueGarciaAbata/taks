import PropTypes from "prop-types";
import Button from "./Button.jsx";
import { useRef, useState } from "react";

export default function TodoItem({ id, text, onChangeUpdate, onClickDelete }) {
  const [userText, setUserText] = useState(text);
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  function handleUserText(e) {
    const updateText = e.target.value;

    if (updateText.trim() === "") {
      return;
    }

    setUserText(updateText);
    onChangeUpdate(id, { id: id, text: userText });
  }

  return (
    <div className="todo-item">
      <input
        ref={inputRef}
        id={id}
        type="text"
        value={userText}
        onChange={(e) => handleUserText(e)}
      />
      <div className="todo-image">
        <Button
          onClick={() => handleFocus()}
          content={<img src="src/assets/edit.svg" alt="Editar" />}
        ></Button>
        <Button
          onClick={() => onClickDelete(id)}
          content={<img src="src/assets/delete.svg" alt="Editar" />}
        ></Button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onChangeUpdate: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
