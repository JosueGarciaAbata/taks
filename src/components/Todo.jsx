import Header from "./Header.jsx";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  function handleClick(task) {
    // Actualizando el estado basado en el estado anterior (tasks)
    setTasks((tasks) => [...tasks, task]);
  }

  function onClickDelete(taskId) {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  function onChangeUpdate(id, updateTask) {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? updateTask : task))
    );
  }

  return (
    <div className="todo">
      <Header />
      <TodoList
        arrayTasks={tasks}
        onChangeUpdate={onChangeUpdate}
        onClickDelete={onClickDelete}
      />
      {/* Se pasa la referencia de handleClick 
      para que no se ejecute en el primer renderizado */}
      <TodoForm onClick={handleClick} />
    </div>
  );
}
