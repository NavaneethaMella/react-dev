import  { useContext } from "react"
import AppContext from '../Context/AppContext'
function Contact(){
    const phone =useContext(AppContext)
    return(
        <div>
            <h2>Contact</h2>
            <h3>phone:{phone}</h3>
        </div>
    )
}
export default Contact