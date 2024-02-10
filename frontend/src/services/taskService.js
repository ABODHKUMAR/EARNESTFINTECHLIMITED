const baseUrl = 'http://localhost:8080/api/tasks';

const getAllTasks = async () => {
  const response = await fetch(baseUrl);
  return await response.json();
};

const addTask = async (taskData) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  });
  return await response.json();
};

const deleteTask = async (taskId) => {
  await fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};

const updateTask = async (taskId, data) => {
  await fetch(`${baseUrl}/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const taskService = {
  getAllTasks,
  addTask,
  deleteTask,
  updateTask,
};

export default taskService;
