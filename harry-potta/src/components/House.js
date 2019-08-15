import React from "react";

const House = props => {
    console.log(props.house)
    return (
        <div>
    <h1>House: {props.house.name}</h1>
    <h2>Mascot: {props.house.mascot}</h2>
    <h2>Head of House: {props.house.headOfHouse}</h2>
    <h2>House Ghost: {props.house.houseGhost}</h2>

        </div>
    )
}



export default House; 
  

// response.data.name 
// response.data.id
// response.data.mascot
// response.data.headOfHouse
// response.data.houseGhost 