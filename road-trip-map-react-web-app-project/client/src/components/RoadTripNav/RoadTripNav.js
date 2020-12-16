import React from 'react';
import * as ReactNavbar from "react-responsive-animate-navbar";
// import roadTripSvg from "../../assets/roadtrip.svg";


const RoadTripNav = () => {
    return (
        <ReactNavbar.ReactNavbar
        color="rgb(25, 25, 25)"
        logo= "https://svgshare.com/i/SLH.svg"
        menu={[
        ]}
        social={[
         
          {
            name: "Twitter",
            url: "https://twitter.com/pramit_armpit",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
};

export default RoadTripNav;
