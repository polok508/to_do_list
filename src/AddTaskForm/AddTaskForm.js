import React from 'react';
import './AddTaskForm.css';

const AddTaskForm = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="add-task-form">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Добавить новую задачу..."
        className="task-input"
      />
      <button type="submit" className="add-button">
        Добавить
      </button>
    </form>
  );
};

export default AddTaskForm;