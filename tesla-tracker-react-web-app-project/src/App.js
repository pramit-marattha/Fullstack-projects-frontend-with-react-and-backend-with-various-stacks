import React, { Component } from 'react';
import './styles/App.css';
import NavHeader from "./components/NavHeader";
import BatteryLife from "./containers/BatteryLife";

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Temperature°",
    unit: "° C",
    step: 10,
    min: -10,
    max: 40
  }
};


class App extends Component {  
  render() {    
    return (     
      <>
       <NavHeader/>      
      <BatteryLife counterDefaultVal={counterDefaultVal}/>
      <div className="glowing-leaves"></div>
      <div className="glowing-leaves"></div>
      <div className="glowing-leaves"></div>
      <div className="glowing-leaves"></div>
      <div className="glowing-leaves"></div>
      <div className="glowing-leaves"></div>
      </>    
        );  
      }
    }

export default App;