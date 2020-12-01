import React, {Component} from 'react';


// It creates our context object, later we will use it to define our Provider or Consumer
// We need to export it because when we use the Consumer, it will be in a different file
export const MyContext = React.createContext();


// We create a class component that will store the global state of the app and the methods we use
class MyProvider extends Component {

  state= {
    name: 'Marc',
    age: 18
  }

  getOld= () => this.setState({age: this.state.age +1})


  render(){
    // We need to return the Provider of our Context, this is a component that accepts a prop named value. This value is an object that could contain a state and any method we need.
    // This component will work as a wrapper for our app, in order to use it as a wrapper, we need to render the props.children
    return (
      <MyContext.Provider value={{
        state: this.state,
        getOld: this.getOld
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider;
