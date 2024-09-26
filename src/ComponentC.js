import {UserContext} from './App.js'
function ComponentC(){
    return(
        <div>
           <UserContext.Consumer>
            {value =><div>{value}</div>}
           </UserContext.Consumer>
        </div>
    )
}
export default ComponentC