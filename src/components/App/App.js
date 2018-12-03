import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'>SWAPIBox</h1>
        <h2 className='subtitle'>The Ultimate Star Wars Wiki</h2>
        <button className='play-button'><i className="far fa-play-circle"></i></button>
      </div>
    );
  }
}

export default App;
