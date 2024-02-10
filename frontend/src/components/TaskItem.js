import React from 'react';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete(task._id);
  };

  const handleUpdate = () => {
    onUpdate(task._id, !task.completed);
  };

  return (
    <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button style={{ marginRight: '5px', backgroundColor: task.completed ? '#6fbf73' : '#f44336', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }} onClick={handleUpdate}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
