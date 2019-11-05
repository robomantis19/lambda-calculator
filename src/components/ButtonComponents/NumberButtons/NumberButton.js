import React, {useState} from "react";
import Display from '../../DisplayComponents/Display';


const NumberButton = (props) => {
  const [add, setAdd] = useState([])
  console.log(add[0]); 

   

  return (
     
    <div className="Number">
      
      <button className="button" onClick={() =>  setAdd( add => add += [props.button])}>
         {props.button}
         
         
      </button>
     
    </div>
     
  );
   
};

export default NumberButton; 
