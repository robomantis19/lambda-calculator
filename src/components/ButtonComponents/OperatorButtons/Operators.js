import React, {useState} from "react";
import OperatorButton from './OperatorButton'; 
import {operators} from '../../../data';
import { tsPropertySignature } from "@babel/types";
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  console.log(operators);
  const [operator, setOperator] = useState(operators); 
  return (
    <div className="operatorsDiv">
      {operator.map((item, index) => (
        <OperatorButton key={index} button={item.char} value={item.value} setOperator={props.setOperator}/> 
      ))}
    </div>
  );
};

export default Operators;
