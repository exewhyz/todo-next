import { useState } from "react";

function AddTask(props) {
  const { setTodos } = props;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    const newTask = {
      id: Date.now(),
      name,
      description,
      completed: false,
    };
    setTodos((prev) => [newTask, ...prev]);
    setName("");
    setDescription("");
  };
  return (
    <>
      <h3>Add Task</h3>
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <textarea
          rows={3}
          placeholder="Task Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTask;

// https://github.com/exewhyz/react-tut
