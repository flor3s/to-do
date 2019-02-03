import React, { Component } from 'react';
import Header from './components/layout/Header';
import Moment from 'react-moment';
import Filter from './components/filter/Filter';
import Tasks from './components/tasks/Tasks';
import AddTask from './components/addtasks/AddTask';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    tasks: [],
    filter: true
  }

  componentDidMount(){
    axios.get('http://localhost:3001/tasks')
    .then(response => this.setState({ tasks: response.data})
    )
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
    axios.delete(`http://localhost:3001/tasks/${id}`)
    .then(response => this.setState({ tasks: [...this.state.tasks.filter(task => task.id !== id)] }));
  }

  // add task
  addTask = (title) => {
    var jsonDate = (new Date()).toJSON();
    axios.post('http://localhost:3001/tasks', {
      title,
      completed: false,
      startTime: jsonDate
    }).then(response => this.setState({ tasks: [...this.state.tasks, response.data] }));
  }

  // toggle filter
  toggleFilter = () => {
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
