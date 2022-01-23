import React, { useState, useRef, useLayoutEffect } from "react";
import FormProps from "../interfaces/FormProps";

function TodoForm(props: FormProps) {
  /* Todo item text */
  const [input, setInput] = useState(props.edit ? props.edit.text : "");

  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto put mouse in input bar of inputRef*/
  useLayoutEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  });

  /* Show the todo item text as it's being typed out */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  /* Call the onSubmit function passed in via Props */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            ref={inputRef}
            placeholder="Update"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
          />
          <button className="todo-button">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            ref={inputRef}
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
          />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
