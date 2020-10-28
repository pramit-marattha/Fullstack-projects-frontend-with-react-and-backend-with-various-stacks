import React from "react";
import SubscribeCard from "react-subscribe-card";

const mailchimpURL = process.env.REACT_APP_MAILCHIMP_URL;

const outerCardStyle = `box-sizing: border-box;
font-family: Finger Paint, cursive;
position: relative;
background-color: #f2f2f2;
border-radius: 8px;
padding: 8px;
margin: 48px auto;
max-width: 90%;
width: 550px;`;

const subContainerStyle = `
font-family: Finger Paint, cursive;
box-shadow: 0 2px 5px -1px rgba(50,50,93,.25), 0 1px 3px -1px rgba(0,0,0,.3);
align-items: center;
    `;

const subInputStyle =`
font-family: Finger Paint, cursive;

background-color: #fdfdfd;
color: #333333;
border-color: #f2f2f2;
border-style: solid;
border-width: 5px;
font-size: 16px;
height: 40px;
line-height: 20px;
margin-bottom: 10px;
margin-top: 0;
padding: 10px 10px;
box-sizing: border-box;
width: 70%;
max-width: 100%;
margin-right: 16px;

@media all and (max-width: 500px) {
  width: 100%;
}`;

const subButtonStyle = `
font-family: Finger Paint, cursive;
background-color: teal;
border: none;
border-radius: 25px;
box-shadow: none;
color: #ffffff;
font-size: 18px;
font-weight: 700;
height: 40px;
line-height: 20px;
padding: 10px 20px;
box-sizing: border-box;
display: inline-block;
cursor: pointer;

&:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
}`;
    
const App = () => (
    <SubscribeCard
    title="Newsletter App"
    description="Stay Tuned and SUBSCRIBE to receive new updates,new features and many more projects related to react.Also, subscribe it asap and you will recieve the latest information which i am currently working on."
    emailPlaceholder="Enter your e-mail address"
    buttonText="Subscribe"
    mailchimpURL={mailchimpURL}
    outerCardStyle={outerCardStyle}
    subContainerStyle={subContainerStyle}
    subInputStyle={subInputStyle}
    subButtonStyle={subButtonStyle}
    />
);

export default App;