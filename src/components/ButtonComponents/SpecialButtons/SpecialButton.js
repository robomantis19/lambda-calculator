import React from "react";

const SpecialButton = (props) => {
  return (
    <div className="Special">
      <div>
        <button className="button" onClick={()=> {props.setOperator(props.button)}}>
          {props.button}
        </button>
      </div>
    </div>
  );
};

export default SpecialButton; 