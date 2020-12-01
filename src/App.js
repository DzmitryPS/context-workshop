import React, { Component } from 'react'
import './App.css';
import Main from './components/Main'

import MyProvider from './context/MyProvider'

class App extends Component {

  // We no longer need this when we use context since the state and methods will be on the context component
  // state= {
  //   name: 'Marc',
  //   age: 18
  // }

  // getOld= () => this.setState({age: this.state.age +1})

  render() {
    // We will wrap our whole app in our Provider coming from the context file
    return (
      <MyProvider>
        <div className="App">
          <p>Something going on in App.js like Navbar</p>
          <hr />
          {/*
          This component is no longer need to pass props since the state is already in the context
          <Main name={this.state.name} age={this.state.age} action={this.getOld} /> */}
          <Main />
        </div>
      </MyProvider>
    );
  }
}

export default App;
