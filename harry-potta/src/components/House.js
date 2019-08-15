import React from "react";

const House = props => {
    console.log(props.house)
    return (
        <div>
    <h1>{props.house.name}</h1>
        </div>
    )
}



export default House; 
  