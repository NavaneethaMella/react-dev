import  { useContext } from "react"
import {Useeff } from "./Useeff"
function Cont(){
    const phone = useContext(Useeff)
    console.log('Phone:',phone)
    return(
        <div>
            <h2>Contact</h2>
            <h3>PHONE: {phone}</h3>
        </div>
    )
}
export default Cont