import React from "react"
import {useContext} from React
import  Appcontext  from "../Contact/Appcontext"
function Footer(){
    const phone =useContext(Appcontext)
    return(
        <div>
            <h2>Footer</h2>
            <h3>phone:{phone}</h3>
        </div>
    )
}
export default Footer