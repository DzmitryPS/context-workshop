import React, { useContext } from 'react';
import { MyContext } from '../context/MyProvider';


const Final = () => {
  const context = useContext(MyContext);

  return (
    <div>
      <p>Last things on Final.js</p>
      <p>NAME: {context.state.name}</p>
      <p>AGE: {context.state.age}</p>
      <button onClick={context.getOld}>Birthday time!</button>
      <hr />
    </div>
  )
}



export default Final;