"use client";

import { useState } from "react";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const [todos, setTodos] = useState(props.todos);

  return (
    <div>
      <AddTask setTodos={setTodos} />
      <h1>Tasks</h1>
      <div className="flex gap-4 flex-wrap p-4 w-full items-center justify-center">
        {todos?.length > 0 ? (
          todos?.map((task, idx) => (
            <TaskItem key={idx} task={task} setTodos={setTodos} />
          ))
        ) : (
          <div>No tasks</div>
        )}
      </div>
    </div>
  );
}

export default TaskList;

//  https://github.com/exewhyz/todo-next
