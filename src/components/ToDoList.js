import React, { useState } from 'react';
import './ToDoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
    setErrorMessage('');
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    } else {
      setErrorMessage('Please fill in the task before adding.');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <div className="outer-box">
        <h1 className="todo-list-title">My To-Do List</h1>
        <div className="inner-box">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter a new task"
              value={newTask}
              onChange={handleInputChange}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button className="add-button" onClick={handleAddTask}>
            Add Task
          </button>
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index} className="task">
                {task}
                <button className="remove-button" onClick={() => handleRemoveTask(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
