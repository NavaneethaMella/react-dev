import { createContext } from "react";
export const AppContext = createContext();
    const ContextProvider =(props) =>{
        const phone ="124566"
      return(
    <AppContext.Provider value ={phone}>
      {props.childern}
    </AppContext.Provider>
      )
    }
    export default ContextProvider