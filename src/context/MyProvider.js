import React, { useState } from 'react';


export const MyContext = React.createContext();

const initialState = {
  name: 'Marc',
  age: 18
}

const MyProvider = props => {

  const [state, setState] = useState(initialState)

  const getOld = () => setState({
    ...state,
    age: state.age + 1
  })

  return (
    <MyContext.Provider value={{state, getOld}}>
      {props.children}
    </MyContext.Provider>
  )

}

export default MyProvider;
