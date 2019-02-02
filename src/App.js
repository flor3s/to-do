import React, { Component } from 'react';
import Header from './components/layout/Header';
import Filter from './components/filter/Filter';
import Tasks from './components/tasks/Tasks';
import AddTask from './components/addtasks/AddTask';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    tasks: [],
    filter: true
  }

  // toggle status 
  toggleComplete = (id) => {
    this.setState({ tasks: this.state.tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }

      return task;
    }) });
  }

  // delete task
  delTask = (id) => {
    this.setState({ tasks: [...this.state.tasks.filter(task => task.id !== id)] });
  }

  // add task
  addTask = (title) => {
    const newTask = {
      id: uuid.v4(),
      title,
      completed: false,
      startTime: new Date()
    }
    this.setState({ tasks: [...this.state.tasks, newTask] })
  }

  // toggle filter
  toggleFilter = () => {
    const f = this.state.filter
    this.setState({ filter: !this.state.filter });
  }

  render() {
    let filteredTasks = { tasks: [] };
    if(this.state.filter) {
      filteredTasks.tasks = this.state.tasks.filter(task => !task.completed)
    } else {
      filteredTasks.tasks = this.state.tasks
    }

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTask addTask={this.addTask}/>
          <Filter filter={this.state.filter} toggleFilter={this.toggleFilter}/>
          <Tasks tasks={filteredTasks.tasks} toggleComplete={this.toggleComplete} delTask={this.delTask}/>
      </div>
      </div>
    );
  }
}

export default App;
