import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

/*For data that is going to change, we have to use state.*/

/*fixing the data of the state and give it to the
custom components might be acheived two way binding */

/* calling the data within the component is defined as state */


  state = {
    username: "peddapalli"
  }

/*Syntax for writing the events in react
for changing the state use this.setState({name: event.target.value})*/

  usernameChangeHandler = (event) => {
    this.setState ({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        /*Custom Components*/
        <UserInput
        updated= {this.usernameChangeHandler}
        currentOutputName= {this.state.username} />
        <UserOutput userName= {this.state.username} />
      </div>
    );
  }
}

export default App;
