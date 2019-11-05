import React, {useState} from "react";
import OperatorButton from './OperatorButton'; 
import {operators} from '../../../data';
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  console.log(operators);
  const [operator, setOperator] = useState(operators); 
  return (
    <div>
      {operator.map((item, index) => (
        <OperatorButton key={index} button={item.char} value={item.value}/> 
      ))}
    </div>
  );
};

export default Operators;
