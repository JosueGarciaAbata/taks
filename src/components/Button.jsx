import PropTypes from "prop-types";

export default function Button({ onClick, content }) {
  return (
    <div className="todo-button">
      <button onClick={onClick}> {content} </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
};
