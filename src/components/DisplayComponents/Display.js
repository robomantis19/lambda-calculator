import React, {useState} from "react";
// import {numbers, specials, operators} from '../../data';
// import NumberButton from '../ButtonComponents/NumberButtons/NumberButton';
// import Operators from '../ButtonComponents/OperatorButtons/Operators';
// import Specials from '../ButtonComponents/SpecialButtons/Specials';

const Display = (props) => {
  // const [display, setDisplay] = useState([NumberButton]); 
  return (
      <div className="display">
        {props.display(props.operator1)}
  
  
      </div>
  )
};

export default Display;