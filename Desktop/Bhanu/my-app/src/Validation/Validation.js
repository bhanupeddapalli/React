import React from 'react';

const validation = (props) => {
   let validationMessage= 'Text Too Enough';

   if(props.inputLength <= 5){
     validationMessage= 'Text Too short!!';
   }


   return(
     <div>
      <p> {validationMessage} </p>
     </div>
   );
};

export default validation;
