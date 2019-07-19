import React, { Component } from 'react';

import Grid from './Grid.js';

export default class App extends Component {
  
    constructor(props) {
        super(props);
        const width = 7;
        const height = 10;
        const numSquares = width*height;
        // const arr = Array(width).fill(Array(height));
        const arr = [[0,0],[0,0],[0,0],[0,0]];
        const tetrominoes = {
            I : [-1,0,1,2],
            O : [-1,0,4,]
        }
        
        this.state = {
            squares: arr,
            activeSquares: Array(4).fill(null),
            activeType: 1
        };
    }
  
    //const I = [-1,0,1,2];
    
    addTetromino() {
        this.setState({
            activeSquares: this.setState.activeSquares.map((val, i) => {5+i}),
            activeType: 1 
        });
        
        //draw();
    }
    
    isMoveAllowed(arr) {
        
    }
    
    tick() {
        
    }
  
    render() {
        
        //addTetromino();
        
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
