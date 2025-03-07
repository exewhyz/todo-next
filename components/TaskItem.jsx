"use client";
import { deleteTodo, updateTodo } from "@/lib/todos";
import { Trash2 } from "lucide-react";

function TaskItem(props) {
  const { setTodos } = props;
  const handleChecked = async (e) => {
    const updatedTodos = await updateTodo(props.task.id, !props.task.completed);
    setTodos(updatedTodos.data);
  };
  const handleDelete = async () => {
    const updatedTodos = await deleteTodo(props.task.id);
    setTodos(updatedTodos.data);
  };
  return (
    <div className="flex border h-40 w-52 flex-col items-start justify-start p-4">
      <div className="flex gap-x-4 items-center w-full justify-between">
        <input
          type="checkbox"
          checked={props.task.completed}
          onChange={handleChecked}
        />
        <h2 className="font-semibold text-xl">{props.task?.name}</h2>
        <Trash2 className="text-red-500" size={20} onClick={handleDelete} />
      </div>
      <p>{props.task?.description}</p>
    </div>
  );
}

export default TaskItem;
