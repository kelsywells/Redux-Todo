import React from 'react';
import './App.css';

class App extends React.Component {
constructor(props) {
  super(props);
    this.state= {
      newTodo: ''
    }
  }

  addTodo(e) {
    e.preventDefault();
    this.props.addTodo(
      {
        value: this.state.newTodo,
        completed: false
      }
    )

    this.setState(
      {
      newTodo: ''      
    }
    )

  }

  
  addNewTodo = e => {
    this.setState({
     newTodo: e.target.value
    })
    console.log('newTodo value:', e.target.value)
  }




    render() {
      return(
        <div>
          <form onSubmit= {this.addTodo}>
            <input

            type="text" placeholder="Add Todo" onChange= {this.addNewTodo} value={this.newTodo} />

          </form>
          <button>Submit Todo</button>
        </div>
      )
    }
  }

  export default App;