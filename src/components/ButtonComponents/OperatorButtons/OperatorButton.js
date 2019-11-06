import React from "react";

const OperatorButton = (props) => {


  return (
    <div className="Operator">
      <button className="button" onClick={() => props.test(props.setOperator(props.button))}>
         {props.button}
      </button>
    </div>
  );
};


export default OperatorButton; 