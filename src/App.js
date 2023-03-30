import React from "react";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
  <div className='App'>
    <div className="container">
    <h2> Weather App </h2>
    <Weather defaultCity="Varadero" />
    <footer>
    This project was created by <a href="https://www.itsmechrissyj.co.uk" target="_blank" rel="noreferrer"> Christine Jones</a> and is available on <a href="https://github.com/itsmechrissyj/react-final-project" target="_blank" rel="noreferrer">Github</a></footer> </div> 
    </div>);
}

export default App;
