import React, { useState } from "react";
import TodoItem from "../interfaces/TodoItem";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState<Array<TodoItem>>([]);

  const addTodos = (todo: TodoItem) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id: number | null, newTodo: TodoItem) => {
    if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
      return;
    }
    setTodos(todos.map((item: TodoItem) => (item.id === id ? newTodo : item)));
  };

  const completeTodo = (id: number) => {
    console.log("complete");
    let updatedTodos = todos.map((todo: TodoItem) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Here's what's on your list:</h1>
      <TodoForm onSubmit={addTodos} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
