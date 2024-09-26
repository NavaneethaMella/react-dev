import {useContext} from 'react'
import  { Useeff } from './Useeff'
function Foot(){
    const phone =useContext(Useeff)
    return(
        <div>
            <h2>Foot</h2>
            <h3>Phone Number:{phone} </h3> 
        </div>
    )
}
export default Foot