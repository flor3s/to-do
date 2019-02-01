import React, { Component } from 'react';
import Header from './components/layout/Header'
import Tasks from './components/tasks/Tasks';

import './App.css';

class App extends Component {
  state = {
    tasks: [ 
      {
        id: 1,
        title: 'Code',
        completed: false
      },
      {
        id: 2,
        title: 'Cook',
        completed: false
      },
      {
        id: 3,
        title: 'Bojack Horseman',
        completed: false
      }
    ]
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


  render() {
    return (
      <div className="App">
        <Header />
        <Tasks tasks={this.state.tasks} toggleComplete={this.toggleComplete} delTask={this.delTask}/>
      </div>
    );
  }
}

export default App;
