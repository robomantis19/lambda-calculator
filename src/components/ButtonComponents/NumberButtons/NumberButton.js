import React, {useState} from "react";
import Display from '../../DisplayComponents/Display';


const NumberButton = (props) => {
  

   

  return (
     
    <div className="Number">
      
      <button className="button" onClick={() => props.display(numerals => numerals += Number(props.button))}>
         {props.button}
         
         
      </button>
     
    </div>
     
  );
   
};

export default NumberButton; 
