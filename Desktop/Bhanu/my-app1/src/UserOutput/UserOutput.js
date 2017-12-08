import React from 'react';
import './UserOutput.css';

/* creating a functional component with some paragraph
defined and then with help of props accesing the username
which is defined in the app.js*/

/* props are set by the parent and they are fixed
throughout the lifetime of a component*/

const userOutput = (props) => {
  return (
          <div className= "UserOutput">
             <p> UserName: {props.userName} </p>;
             <p> This is my first react app </p>;
          </div>
       );
};

export default userOutput;
