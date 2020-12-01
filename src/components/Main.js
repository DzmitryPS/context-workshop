import React from 'react';
import Section from './Section'

const Main = () =>
  <div>
    <p>Some functionalities and stuff on Main.js</p>
    <hr />
    {/*
    This component is no longer need to pass props since the state is already in the context
    <Section name={props.name} age={props.age} action={props.action}/> */}
    <Section/>
  </div>

export default Main;