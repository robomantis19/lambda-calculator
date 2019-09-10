import React from "react";

const styles = {
  color: "white",
  backgroundColor: " #2276bf",
  border: "2px solid  #2276bf", 
  width: "80px",
  height: "80px",
  margin: "10px",
  borderRadius: "50px",
  boxShadow: "1px 6px #322c2d",
  
  // display: "flex",
  // flexDirection: "column",
};

const SpecialButton = (props) => {
  return (
    <button style = {styles}>
      <span>

        {props.specials}
      </span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};
export default SpecialButton;
