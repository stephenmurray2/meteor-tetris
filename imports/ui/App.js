import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Grid from './Grid.js';

export default class App extends Component {
  
    constructor(props) {
        super(props);
        const arr = Array(40).fill(0);
        
        this.state = {
            squares: arr,
            active-squares: Array(4).fill(null),
            active-type: 1 
        };
    }
  
    const I = [-1,0,1,2];
    
    addTetromino() {
        this.setState({
            active-squares: this.setState.active-squares.map((val, i) => {5+i}),
            active-type: 1 
        });
        
        draw();
    }
    
    draw() {
        this.setState({
            squares: this.setState.squares.map((val, i) => {5+i}),
        });
    }
    
    isMoveAllowed(arr) {
        
    }
    
    tick() {
        
    }
  
    render() {
        
        addTetromino();
        
        return (
            <div className="container">
                <h1>TETRIS</h1>
                <div className="grid-wrap">
                    <Grid squares={this.state.squares}/>
                </div>
            </div>
        );
    }
}
