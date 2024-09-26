import { creatContext } from "react";
export const Appcontext = createContext();
    const contextprovider =(props) =>{
        const phone ="124566"
      return(
    <Appcontext.provider value ={phone}>{props.childern}
    </Appcontext.provider>
      )
    }
    export default Contextprovider