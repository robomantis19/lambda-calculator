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

const OperatorButton = (props) => {
  console.log('OperatorButton props: ', props);
  return (
    <div>
      <button style = {styles}>
        <span>

          {props.operators}
        </span>
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default OperatorButton;
