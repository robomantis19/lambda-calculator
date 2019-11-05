import React from "react";

const OperatorButton = (props) => {
  return (
    <div className="Operator">
      <button className="button">
         {props.button}
      </button>
    </div>
  );
};


export default OperatorButton; 