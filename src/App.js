import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
global.jQuery = require('jquery')
global.Popper = require('popper.js/dist/umd/popper')
require('bootstrap')

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello world
      </div>
    );
  }
}

export default App;
