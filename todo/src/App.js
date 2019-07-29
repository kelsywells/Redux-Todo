import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
constructor(props) {
  super(props);
    this.state= {
      todos: []
    }
  }


    render() {
      return(
        <div>
          <form>
            <input
            type="text" placeholder="Add Todo">

            </input>
          </form>
          <button>Submit Todo</button>
        </div>
      )
    }
  }

  export default App;