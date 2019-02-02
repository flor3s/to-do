import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

class TaskItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px 10px',
      borderBottom: '1px #ccc solid',
      color: this.props.task.completed ? 'rgb(0,0,0,0.3)' : 'rgb(0,0,0,1)',
      textDecoration: this.props.task.completed ? 'line-through' : 'none',
    }
  }

  render() {
    const { id, title, startTime } = this.props.task;
    const formattedDate = <Moment format="MM/DD/YYYY">{startTime}</Moment>
    const formattedTime = <Moment format="hh:mm A">{startTime}</Moment>
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> { ' ' }
          {title} 
          <span style={timeStamp}> - Created {formattedDate} at {formattedTime}</span>
          <button onClick={this.props.delTask.bind(this, id)} style={btnStyle}>Remove</button>
        </p>
      </div>
    )
  }
}

//Proptypes
TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTask: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#D83500',
  color: '#fff',
  border: 'none',
  padding: '10px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  float: 'right',
  position: 'relative',
  top: '-5px'
};

const timeStamp = {
  color: '#AEB6BF',
  fontSize: '15px'
}

export default TaskItem;