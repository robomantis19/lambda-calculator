import React from "react";

const OperatorButton = (props) => {


  return (
    <div className="Operator">
      <button className="button" onClick={() => props.setOperator(props.value)}>
         {props.button}
      </button>
    </div>
  );
};


export default OperatorButton; 