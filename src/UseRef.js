import {useEffect, useState ,useRef} from "react";
function UseRef(){
    const [value , setValue] =useState(0)
    const count =useRef(0)
    console.log(count)

    useEffect(()=>{
        count.current = count.current +1;
    })
    return(
        <div>
            <button onClick={()=>{setValue(prev => prev -1)}}>-1 </button>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(prev =>prev + 1)}}> +1</button>
            <h1>Render count: {count.current} </h1>
        </div>
    )
}
export default UseRef