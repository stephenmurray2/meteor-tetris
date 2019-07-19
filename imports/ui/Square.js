import React, { Component } from 'react';

export default class Square extends React.Component {
  
  render() {
    return (
      <div className={this.props.propclass} />
    );
  }
}
