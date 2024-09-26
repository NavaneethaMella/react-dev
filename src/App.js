import React from 'react'
import './App.css';
import Usecallback from './Usecallback'
import { useCallback, useState } from 'react';
function App() {
  const [count , setCount] =useState(0)
  const newFn= useCallback(()=>{},[])
  return (
    <div className="App">
     <Usecallback newFn={newFn}/>
     <h1>{count}</h1>
     <button onClick={()=>setCount(prev => prev + 1)}>click on</button>
     
    </div>
  );
}

export default App;
