import React from "react";

const SpecialButton = (props) => {
  return (
    <div className="Special">
      <button className="button">
         {props.button}
      </button>
    </div>
  );
};

export default SpecialButton; 