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
          <button onClick={this.props.delTask.bind(this, id)} style={btnStyle}>Remove</button>
        </p>
      </div>
    );
  }
}

//Proptypes
TaskItem.propTypes = {
  task: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#D83500',
  color: '#fff',
  border: 'none',
  padding: '10px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  float: 'right',
};

export default TaskItem;