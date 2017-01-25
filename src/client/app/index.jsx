import React, { Component } from 'react';
import { render } from 'react-dom';
import { Board } from './components';
import {
  getInitialEasyState,
  getInitialHardState,
  toggle,
  boardComplete,
  getWinningMessage,
  getGameOverMessage
} from './utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      difficulty: null,
      gameOver: false,
      message: ''
    }
    
    this.handleToggle = this.handleToggle.bind(this);
  }

  startEasyGame() {
    this.setState(getInitialEasyState());
  }
  
  startHardGame() {
    this.setState(getInitialHardState());
  }

  handleToggle(r, c) {
    if (!this.state.gameOver) {
      const toggledBoard = toggle(this.state.board, r, c);

      if (boardComplete(toggledBoard)) {
        this.setState(getWinningMessage(toggledBoard));
      } else {
        this.setState({ board: toggledBoard });
      }
    } else {
      this.setState(getGameOverMessage());
    }
  }

  componentWillMount() {
    this.startEasyGame();
  }

  render() {
    return (
      <div>
        <p>The object of this game is to set the entire board to blue.</p>
        
        <div className="buttons">
          <div className="button" onClick={() => {this.startEasyGame()}}>Easy</div>
          <div className="button" onClick={() => {this.startHardGame()}}>Hard</div>
        </div>
        
        <Board
          board={ this.state.board }
          gameOver={ this.state.gameOver }
          handleToggle={ this.handleToggle }
          difficulty={ this.state.difficulty }
        />
        
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}  

render(<App/>, document.getElementById('app'));
