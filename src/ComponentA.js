function ComponentA(){
    return(
        <div>
         Content from componentA
        </div>
    )
}
export default ComponentA

import React from 'react'
import './App.css';

import ComponentC from './ComponentC';
export const UserContext =React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"hello"}>
        <ComponentC></ComponentC>
      </UserContext.Provider>
     
    </div>
  );
}

export default App;
