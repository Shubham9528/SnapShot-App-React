import React, { useState } from "react";
import Button from "@mui/material/Button";

function ButtonGroup(props) {
  

  function handleClick(event) {
    const { value } = event.target;
    
    props.onAdd(value);  // Use value directly here
   
  }

  return (
    <div className="button">
      <Button onClick={handleClick} variant="contained" value="mountain">
        Mountain
      </Button>
      <Button onClick={handleClick} variant="contained" value="beaches">
        Beaches
      </Button>
      <Button onClick={handleClick} variant="contained" value="bird">
        Bird
      </Button>
      <Button onClick={handleClick} variant="contained" value="food">
        Food
      </Button>
    </div>
  );
}

export default ButtonGroup;
