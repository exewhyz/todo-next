"use client";
import { updateTodo } from "@/lib/todos";

function TaskItem(props) {
  const { setTodos } = props;
  const handleChecked = async (e) => {
    const updatedTodos = await updateTodo(props.task.id, !props.task.completed);
    setTodos(updatedTodos.data);
  };
  return (
    <div className="flex border h-40 w-52 flex-col items-start justify-start p-4">
      <div className="flex gap-x-4">
        <input
          type="checkbox"
          checked={props.task.completed}
          onChange={handleChecked}
        />
        <h2 className="font-semibold text-xl">{props.task?.name}</h2>
      </div>
      <p>{props.task?.description}</p>
    </div>
  );
}

export default TaskItem;
