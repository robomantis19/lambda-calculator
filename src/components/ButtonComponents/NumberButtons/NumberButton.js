import React from "react";



const styles = {
  color: "white",
  backgroundColor: "blue",
  border: "2px solid blue", 
  width: "80px",
  height: "80px",
  margin: "10px",
  borderRadius: "50px",
  
  // display: "flex",
  // flexDirection: "column",
};

const NumberButton = (props) => {
  console.log("NumberButton props: ", props);
  return (
    <button style = {styles}>
      <span >
      {props.numbers}
      </span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;
