import { createContext } from "react";
export const Useeff= createContext();
    const ContextProvider =({children}) =>{
        const [phone ] = ("+1 3211124566 ")
      return(
    <Useeff.Provider value={phone}>
      {children}
    </Useeff.Provider>
      )
    }
    export default ContextProvider