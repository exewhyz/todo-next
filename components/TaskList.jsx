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
      <div className="task-list">
        {todos?.length > 0 ? (
          todos?.map((task, idx) => (
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

//  https://github.com/exewhyz/todo-next
