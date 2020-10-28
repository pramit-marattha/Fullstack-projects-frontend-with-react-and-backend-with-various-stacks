import React from 'react';
import Newsletter from "./components/Newsletter";
import "./styles/App.css";
import newslettersvg from "./assets/newsletter.svg";



const App = () => {
  return (
    <div className="centerEverything">
      <Newsletter/>
  <img src={newslettersvg} alt="React Logo" />
    </div>
  );
}

export default App;

