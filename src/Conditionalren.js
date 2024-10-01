import Greeting from './Greeting'
import Specgreet from './Specgreet'
function Conditionalren(props){
    const isLoggedIn = props.isLoggedIn
    return(
        <div>
    if (isLoggined) {
      <p><Greeting/></p>
      
    }
    else {
       <Specgreet/>
    }
    </div>
    )
}
export default Conditionalren