import React from "react";
import MdEditor from "./components/MdEditor";
import PersistentDrawerLeft from "./components/Navbar/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  

  return (
    <div className="App">
      <PersistentDrawerLeft />
      <div className='MdEditor'>
       <MdEditor />
        
      </div>
    </div>
  );
}

export default App;
