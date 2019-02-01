import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTask extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input
          type="text"
          name="title"
          style={{flex: '10',padding: '10px', border: '1px #ccc dotted'}}
          placeholder="Add task ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{position: 'absolute', visibility: 'hidden'}} 
        />
      </form>
    )
  }
}

//Proptypes
AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
}

export default AddTask