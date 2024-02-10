import React from 'react';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(task._id);
  };

  const handleUpdate = () => {
    onUpdate(task._id, !task.completed);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleUpdate}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
