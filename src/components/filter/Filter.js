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
    return (
      <p style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.toggleFilter} /> { ' ' }
        Show Completed Tasks
      </p>
    )
  }
}

//Proptypes
// Tasks.propTypes = {
//   tasks: PropTypes.array.isRequired,
//   toggleComplete: PropTypes.func.isRequired,
//   delTask: PropTypes.func.isRequired
// }

export default Filter;