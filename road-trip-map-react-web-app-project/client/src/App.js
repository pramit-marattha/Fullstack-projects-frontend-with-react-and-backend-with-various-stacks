import * as React from 'react';
import { useState , useEffect} from 'react';
import ReactMapGL, {Marker,Popup } from 'react-map-gl';
import {listLogEntries} from "./api/API";
import MapPinLogo from "./assets/MapPinLogo.svg";
import MarkerPopup from "./assets/MarkerPopup.svg";
import TripEntryForm from "./components/TripEntryForm";
import ReactStars from "react-rating-stars-component";
import RoadTripNav from "./components/RoadTripNav/RoadTripNav";


const App = () => {
  const [logEntries,setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation,setAddEntryLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 27.7577,
    longitude: 85.3231324,
    zoom: 7
  });

  const getEntries = async ()=>{
    const logEntries = await listLogEntries();
    setLogEntries(logEntries);
    console.log(logEntries);
    };

  useEffect(()=>{
    getEntries();
  },[])


  const showMarkerPopup = (event)=>{
    console.log(event.lngLat);
    const [ longitude ,latitude] = event.lngLat;
    setAddEntryLocation({
      longitude,
      latitude,
    });
  }

  return (
    <>
    <RoadTripNav/>
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/pramitmarattha/ckiovge5k3e7x17tcmydc42s3"
      // mapStyle="mapbox://styles/pramitmarattha/ck95vrf9a5gtl1ik597zo6a4x"
      mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      onDblClick = {showMarkerPopup}
    >
    {
      logEntries.map(entry =>(
        <React.Fragment key={entry._id}>
        <Marker latitude={entry.latitude} longitude={entry.longitude} >
        <div 
        onClick = {()=> setShowPopup({
          // ...showPopup,
          [entry._id] : true,
        })}
        >
        <img className="map-pin" style={{width:`${5 * viewport.zoom}px`,height:`${5 * viewport.zoom}px`}} src={MapPinLogo} alt="Map Pin Logo" />
        </div>
          {/* <div style={{color:"white"}}>{entry.title}</div> */}
        </Marker>
        {
          showPopup[entry._id] ? (
        <Popup
          latitude={entry.latitude}
          longitude={entry.longitude}
          closeButton={true}
          closeOnClick={false}
          dynamicPosition={true}
          onClose={() => setShowPopup({
          // ...showPopup,[entry._id] : false,
        })}
          anchor="top" >
          <div className="popup">
            <ReactStars
                count={10}
                value={entry.rating}
                size={29}
                activeColor="#ffd700"
              />
            <h3>{entry.title}</h3>
            <p>{entry.comments}</p>
            <small>Visited : {new Date(entry.visitDate).toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</small>
            <p>Ratings: {entry.rating}</p>
            <div className="small_description">{entry.description}</div>

            {entry.image && <img src={entry.image} alt={entry.title}/>}
          </div>
        </Popup>
          ) : null
        }
        </React.Fragment>
      ))
    }
    {
      addEntryLocation ? (
        <>
        <Marker latitude={addEntryLocation.latitude} longitude={addEntryLocation.longitude} >
        <div>
        <img className="map-pin" style={{width:`${8 * viewport.zoom}px`,height:`${8 * viewport.zoom}px`}} src={MarkerPopup} alt="Map Pin Logo" />
        </div>
          {/* <div style={{color:"white"}}>{entry.title}</div> */}
        </Marker>

        <Popup
          latitude={addEntryLocation.latitude}
          longitude={addEntryLocation.longitude}
          closeButton={true}
          closeOnClick={false}
          dynamicPosition={true}
          onClose={() => setAddEntryLocation(null)}
          anchor="top" >
          <div className="popup">
            <TripEntryForm onClose={() => {
              setAddEntryLocation(null);
              getEntries();
            }} location={addEntryLocation}/>
          </div>
        </Popup>
        </>
      ) : null
    }
    </ReactMapGL>
    </>
  );
}

export default App;