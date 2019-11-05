import React from "react";
import { tsPropertySignature } from "@babel/types";

const NumberButton = (props) => {
  return (
    <div className="Number">
      <button className="button">
         {props.button}
      </button>
    </div>
  );
};

export default NumberButton; 
