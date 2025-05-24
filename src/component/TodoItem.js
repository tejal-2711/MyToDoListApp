import React from "react";
import "./Todo.css";

function TodoItem({ task, deleteTask, toggleCompleted }) {
  const handleChange = () => {
    toggleCompleted(task.id);
  };

  return (
    <div className="todolist">
      <div className={`todo-item ${task.completed ? "completed" : ""}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
        />
        <p>{task.text}</p>
        <button onClick={() => deleteTask(task.id)} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
