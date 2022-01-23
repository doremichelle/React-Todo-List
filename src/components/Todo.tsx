import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "../interfaces/TodoItem";
import { TiDelete } from "react-icons/ti";
import { BiEdit } from "react-icons/bi";

function Todo({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}: {
  todos: Array<TodoItem>;
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number | null, newTodo: TodoItem) => void;
}) {
  /* The TodoItem being edited */
  const [edit, setEdit] = useState<TodoItem>({
    id: null,
    text: "",
    isComplete: false,
  });

  const submitUpdate = (newItem: TodoItem) => {
    updateTodo(edit.id, newItem);
    setEdit({
      id: null,
      text: "",
      isComplete: false,
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <>
      {todos.map((todo: any, idx: number) => {
        return (
          <div
            key={idx}
            className={todo.isComplete ? "todo-row-complete" : "todo-row"}
          >
            <span
              key={todo.id}
              onClick={() => {
                completeTodo(todo.id);
              }}
            >
              {todo.text}
            </span>
            <span className="icons">
              <TiDelete
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
              />
              <BiEdit
                onClick={() =>
                  setEdit({
                    id: todo.id,
                    text: todo.text,
                    isComplete: todo.isComplete,
                  })
                }
                className="edit-icon"
              />
            </span>
          </div>
        );
      })}
    </>
  );
}

export default Todo;
