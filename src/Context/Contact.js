import  { useContext } from "react"
import Appcontext from '../Context/Appcontext'
function Contact(){
    const phone =useContext(Appcontext)
    return(
        <div>
            <h2>Contact</h2>
            <h3>phone:{phone}</h3>
        </div>
    )
}
export default Contact