import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc solid',
      color: this.props.task.completed ? 'rgb(0,0,0,0.3)' : 'rgb(0,0,0,1)',
      textDecoration: this.props.task.completed ? 'line-through' : 'none',
    }
  }

  render() {
    const { id, title } = this.props.task;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> { ' ' }
          {title}
        </p>
      </div>
    );
  }
}

//Proptypes
TaskItem.propTypes = {
  task: PropTypes.object.isRequired
}

export default TaskItem;