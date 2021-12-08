import React, {useEffect, useState} from "react";
import './App.css';
import Weather from './components/Weather';
import {Dimmer, Loader} from 'semantic-ui-react';
export default function App() {

const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
  navigator.geolocation.getCurrentPosition(function(position){
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  });

  await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=fe38d498bd1b82dee7101320dbb5bdff`)
  .then(res => res.json())
  .then(result => {
    setData(result)
    console.log(result);
  });
}
  fetchData();
}, [lat, long])

  return (
    <div className="App">
    {(typeof data.main != 'undefined') ? (
      <Weather weatherData={data}/>
    ): (
      <div>
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      </div>
    )}
    </div>
  );
}

// import './App.css';
// import React, { useEffect, useState } from "react";
// import Weather from './components/Weather';
// export default function App() {
  
//   const [lat, setLat] = useState([]);
//   const [long, setLong] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         setLat(position.coords.latitude);
//         setLong(position.coords.longitude);
//       });

//       await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=fe38d498bd1b82dee7101320dbb5bdff`)
//       .then(res => res.json())
//       .then(result => {
//         setData(result)
//         console.log(result);
//       });
//     }
//     fetchData();
//   }, [lat,long])
  
//   return (
//     <div className="App">
      
//     </div>
//   );
// }