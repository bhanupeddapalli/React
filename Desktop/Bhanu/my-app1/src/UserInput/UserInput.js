import React from 'react';
/* Creating a userInput functional component
returning a input field with onchange event
and poping up the currentOutputName in the
Input field with the help of Props*/

/* props are set by the parent and they are fixed
throughout the lifetime of a component*/

/* calling the data from parent component or class component
to child component or functional component */ 

const userInput = (props) => {

  const inputStyle = {
      border : '2px solid red',
      margin: '16px'
  };

  return <input
          type="text"
          style= {inputStyle}
          onChange={props.updated}
          value={props.currentOutputName}/>;
};

export default userInput;
