
import {useState} from "react";
function  UseState(){
    const [car , setCar] =useState({
    brand:"ferrari",
    model:"Roma",
    year:"2024",
    color:"black"
    })
const changeColor = ()=>{
    setCar((prev) =>{
        return{...prev , color:"purpule"}
} )
} 
  return(
    <div>
    <h1>Brand of the car is {car.brand}</h1>
    <h2>the colour of car {car.color} and model {car.model} from year {car.year}</h2>
    <button onClick={changeColor}></button>
     </div>
    )
}
export default UseState;