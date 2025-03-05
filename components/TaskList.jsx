import AddTask from "./AddTask";
import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";

function TaskList() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const data = await fetch("/api/todos");
      const tasks = await data.json();
      setTodos(tasks.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <AddTask setTodos={setTodos} />
      <h1>Tasks</h1>
      <div className="task-list">
        {todos.length > 0 ? (
          todos.map((task, idx) => (
            //   <div key={idx}>{task}</div>
            <TaskItem key={idx} task={task} toggleChecked={setTodos} />
          ))
        ) : (
          <div>No tasks</div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
