import PropTypes from "prop-types";
import TodoItem from "./TodoItem.jsx";

export default function TodoList({
  arrayTasks,
  onChangeUpdate,
  onClickDelete,
}) {
  return (
    // In this place, it will be filled with the task that the user inserts.
    <div className="todo-items">
      {arrayTasks.map((task) => {
        return (
          <TodoItem
            id={task.id}
            key={task.id}
            text={task.text}
            onChangeUpdate={onChangeUpdate}
            onClickDelete={onClickDelete}
          />
        );
      })}
    </div>
  );
}

// element si es un componente de react que se renderizará directamente.
// node si puede ser cualquier cosa renderizable, como texto, un número, un nodo react.
TodoList.propTypes = {
  arrayTasks: PropTypes.array.isRequired,
  onChangeUpdate: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
