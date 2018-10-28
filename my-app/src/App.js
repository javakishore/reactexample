import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './component/User';
import { Hello } from './component/Hello';
class App extends Component {
  state = {
    data:[
        {name:"kishore"},
        {name:"sarala"}
    ]

  };
  submit1=()=>{
    console.log("clicked");
    this.setState({
      data:[
        {name:"kishore Changed"},
        {name:"sarala changed"}
    ]
    })
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <button onClick={this.submit1}>Submit</button>

          <Hello>text</Hello>
          <User hello={this.state.data[0].name}/>
          <User />
          <User hello={this.state.data[1].name}/>
          <User />
          <User hello="abcd"> children</User>
          <Hello />
          <Hello />
          <Hello />
        </header>
      </div>
    );
  }
}

export default App;
