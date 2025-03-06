import { useState } from "react";

function AddTask(props) {
  const { setTodos } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) return;
    const response = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ name, description }),
    });
    const newTodos = await response.json();
    setTodos(newTodos.data);
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <h3 className="font-bold text-2xl">Add Task</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center w-full"
      >
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-1/4 border"
        />
        <textarea
          rows={3}
          placeholder="Task Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="w-1/4 border"
        />
        <button
          type="submit"
          className="flex items-center justify-center bg-blue-400 px-4 py-2 rounded-xl"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTask;

// https://github.com/exewhyz/react-tut
