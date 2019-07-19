import React, { Component } from 'react';

import classNames from 'classnames';

import { Square } from './Square.js'

export default class Grid extends React.Component {
  
  tablerows () {
    return this.props.squares.map(rows => {
        var row = rows.map(square => <div className="square fill fillOne"></div>); 
        return <div className="board-row">{row}</div>;
    });
  }
  
  render() {
    return (
      <div id="stuff">
        {this.tablerows()}
      {/* {
        this.props.squares.map((row,k1) => (
          <div key={k1} className="fill fill-one">
            {
              row.map((square,k2)=> <div key={k2} className="fill"></div>)
            }
          </div>
        ))
      } */}
      </div>
    );
  }
}
