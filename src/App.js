import React, { Component } from 'react';
import Tasks from './components/Tasks';

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

  toggleComplete = (id) => {
    this.setState({ tasks: this.state.tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }

      return task;
    }) });
  }

  render() {
    return (
      <div className="App">
        <Tasks tasks={this.state.tasks} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
