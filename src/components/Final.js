import React from 'react';

// const Final = props =>
//   <div>
//     <p>Last things on Final.js</p>
//     <p>NAME: {props.name}</p>
//     <p>AGE: {props.age}</p>
//     <button onClick={props.action}>Birthday time!</button>
//     <hr />
//   </div>


// This component will be consuming our context so we need to import it in order to use it
import { MyContext } from '../context/MyProvider';

// This component will be wrapped in our context.Consumer so we have access to the global state and methods declared there.
// It only accepts a child a function that will return some html, this function has as an argument the value of our consumer (which stores the state and our methods)
const Final = () =>
  <MyContext.Consumer>
    {value => (
      <div>
        <p>Last things on Final.js</p>
        <p>NAME: {value.state.name}</p>
        <p>AGE: {value.state.age}</p>
        <button onClick={value.getOld}>Birthday time!</button>
        <hr />
      </div>
    )}

  </MyContext.Consumer>


export default Final;