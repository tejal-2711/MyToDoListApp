import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { PieChart } from "react-minimal-pie-chart";

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctor Appointment", completed: true },
    { id: 2, text: "Meeting at School", completed: false },
  ]);

  const [text, setText] = useState("");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const data = [
    { title: "Completed", value: completedTasks, color: "#29636b" },
    {
      title: "Remaining",
      value: totalTasks - completedTasks,
      color: "#dd6ceb",
    },
  ];
  return (
    <div className="todo-list-parent">
      <div className="todo-list">
        <div className="tasks">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleCompleted={toggleCompleted}
            />
          ))}

          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={() => addTask(text)}>Add</button>
        </div>
        <div className="taskProgression">
          <h2>
            Tasks Progress: {completedTasks}/{totalTasks}
          </h2>
          <h3>You are {percentage}% done with your tasks!</h3>
          <PieChart
            key={`${completedTasks}-${totalTasks}`}
            data={data}
            animate
            animationDuration={1000} // duration in ms
            animationEasing="ease-out"
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
            labelStyle={{
              fontSize: "5px",
              fill: "#fff",
            }}
            labelPosition={70}
            style={{ width: "200px", height: "200px" }}
          />
          <div className="cute-progress-container">
            <div className="cute-progress-track">
              <div
                className="cute-progress-fill"
                style={{ width: `${percentage}%` }}
              >
                <span className="cute-character" role="img" aria-label="cat">
                  🐱
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="cute-footer">
        <div className="emoji-trail">
          🐾 🐾 🐾 Keep up the great work! 🐾 🐾 🐾
        </div>
      </footer>
    </div>
  );
}

export default TodoList;
