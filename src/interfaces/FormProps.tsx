import TodoItem from "./TodoItem";

interface FormProps {
  edit?: TodoItem;
  onSubmit: (todo: TodoItem) => void;
}

export default FormProps;
