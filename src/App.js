import React from "react";
import TodoList from "./component/TodoList";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
