import React from "react";

function TaskItem(props) {
  const { toggleChecked } = props;
  const handleChecked = (e) => {
    toggleChecked((prev) =>
      prev.map((task) =>
        task.id === props.task.id
          ? { ...task, completed: e.target.checked }
          : task
      )
    );
  };
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={handleChecked}
      />
      <h2>{props.task?.name}</h2>
      <p>{props.task?.description}</p>
    </div>
  );
}

export default TaskItem;
