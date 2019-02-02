import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Filter extends Component {
  getStyle = () => {
    return {
      background: '#fff',
      padding: '10px 10px',
      borderBottom: '2px #ccc solid',
      margin: '0',
      fontSize: '14px'
    }
  }

  render() {
    const filter = this.props.filter;
    return (
      <p style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.toggleFilter} /> { ' ' }
        Show Completed Tasks
      </p>
    )
  }
}

const btnStyle = {
  background: '#D83500',
  color: '#fff',
  border: 'none',
  padding: '10px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

//Proptypes
// Tasks.propTypes = {
//   tasks: PropTypes.array.isRequired,
//   toggleComplete: PropTypes.func.isRequired,
//   delTask: PropTypes.func.isRequired
// }

export default Filter;