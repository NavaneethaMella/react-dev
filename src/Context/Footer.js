
import {useContext} from 'react'
import  AppContext  from '../Context/AppContext'
function Footer(){
    const phone =useContext(AppContext)
    return(
        <div>
            <h2>Footer</h2>
            <h3>phone:{phone}</h3>
        </div>
    )
}
export default Footer