 import { useRef , useState } from "react"
 function Userefdom(){
    const inputElem = useRef()

    const btnClicked =()=>{
        console.log(inputElem.current);
        inputElem.current.style.background = "blue"
    }
    return(
        <div>
<input type="text" ref={inputElem}/>
<button onClick={btnClicked}>press</button>
        </div>
    )
}
export default Userefdom