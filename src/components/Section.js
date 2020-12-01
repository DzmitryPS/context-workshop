import React from 'react';
import Final from './Final';

const Section = () =>
  <div>
    <p>Some crazy things and stuff on Section.js</p>
    <hr />
    {/*
    This component is no longer need to pass props since the state is already in the context
    <Final name={props.name} age={props.age} action={props.action}/> */}
    <Final />
  </div>

export default Section;