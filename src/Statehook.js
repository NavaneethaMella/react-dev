//import { useState }, from "react";


function Statehook(){

const [count,setCount]=useState(0);

const changeCount = ()=>{
   setCount(count+1) 
}
return(
    <div>
  <h1>The number of times clicked the count: {count}</h1>
   <Button onClick={changeCount}>clickme</Button>
   </div>
)
}
export default Statehook