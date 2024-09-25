import {useEffect, useState ,useRef} from "react";
function UseRef(){
    const [value , setValue] =useState(0)
    const count =useRef(0)


    useEffect(()=>{
        count.cureent = count.current +1;
    })
    return(
        <div>
            <button onClick={()=>{setValue(prev => prev -1)}}>-1 </button>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(prev =>prev + 1)}}> +1</button>
        </div>
    )
}
export default UseRef