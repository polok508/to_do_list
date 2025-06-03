import './App.css';
import React, { Component } from 'react'
import ToDoItem from './ToDoItem/ToDoItem';
import todosData from './todosData';
import AddTaskForm from './AddTaskForm/AddTaskForm';
class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: todosData,
      newTaskText: ''
    };
  }

  handleChange = (id) => {
    this.setState(state => ({
      todoItems: state.todoItems.map(item =>
        item.id === id ? {...item, completed: !item.completed} : item
      )
    }));
  };

  handleInputChange = (e) => {
    this.setState({ newTaskText: e.target.value });
  };

  handleAddTask = (e) => {
    e.preventDefault();
    if (!this.state.newTaskText.trim()) return;

    const newTask = {
      id: Date.now(),
      description: this.state.newTaskText,
      completed: false
    };

    this.setState(state => ({
      todoItems: [newTask, ...state.todoItems],
      newTaskText: ''
    }));
  };

  render() {
    const { todoItems, newTaskText } = this.state;
    const activeTasks = todoItems.filter(task => !task.completed);
    const completedTasks = todoItems.filter(task => task.completed);
    const finalTasks = [...activeTasks, ...completedTasks].map(item => (
      <ToDoItem
        key={item.id}
        description={item.description}
        completed={item.completed}
        handleChange={() => this.handleChange(item.id)}
      />
    ));

    return (
      <div className="App">
        <h1 className='title'>Какие планы на день?</h1>
        
        <AddTaskForm
          value={newTaskText}
          onChange={this.handleInputChange}
          onSubmit={this.handleAddTask}
        />

        <h2 className='titleblock'>Задачи ({activeTasks.length})</h2>
        {finalTasks}
      </div>
    );
  }
}

export default App;