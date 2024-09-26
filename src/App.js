import React from 'react'
import './App.css';
import AppContext from '../Context/AppContext';
import Profile from '../Context/Profile'
import Footer from '../Context/Footer'
function App() {
  return (
    <div className="App">
      <AppContext></AppContext>
      <Profile></Profile>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
