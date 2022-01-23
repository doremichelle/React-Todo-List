import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h1>List, React, Get Stuff Done</h1>
      <p>A todo list powered by React</p>
      <br></br>
      <TodoList />
    </div>
  );
}

export default App;
