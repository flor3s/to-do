import React, { Component } from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

class Tasks extends Component {
  render() {
    console.log(this.props.tasks)
    return this.props.tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleComplete={this.props.toggleComplete} delTask={this.props.delTask}/>
      ));
  }
}


//Proptypes
Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default Tasks;