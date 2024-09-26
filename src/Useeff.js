import { createContext } from "react";
export const Useeff= createContext();
    const ContextProvider =(props) =>{
        const phone = "+1 124566"
      return(
    <Useeff.Provider value ={phone}>
      {props.Childern}
    </Useeff.Provider>
      )
    }
    export default ContextProvider