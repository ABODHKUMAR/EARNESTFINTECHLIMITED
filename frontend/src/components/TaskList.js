import React from 'react';
import './TaskList.css'
const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div className="task-list-container">
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td className="description-cell">{task.description}</td>
              <td>{task.completed ? 'Completed' : 'Not Completed'}</td>
              <td>
                <button className="action-button" onClick={() => onUpdate(task._id, !task.completed)}>
                  {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
                <button className="action-button delete-button" onClick={() => onDelete(task._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
