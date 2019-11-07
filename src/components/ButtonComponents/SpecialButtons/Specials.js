import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from './SpecialButton'; 
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  console.log(specials); 
  const [special, setSpecial] = useState(specials); 
  return (
    <div className= "specialDiv">
      {special.map((item, index) => (
        <SpecialButton key={index} button={item} setOperator={props.setOperator}/> 
      ))}
    </div>
  );
};

export default Specials; 
