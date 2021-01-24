import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './App.css';
import React, {useState,useEffect} from "react";
import firebase from "firebase";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

function App() {
  const firebaseApp = firebase.apps[0];
  
  var db = firebase.firestore();
  
  const [locations,setLocations]=useState([])

  const fetchLocation=async()=>{
    const locations = []
    db.collection('locations').get()
        .then(snapshot => {
          snapshot.docs.forEach(location => {
            console.log(location.id, " => ", location.data());

            let currentID = location.id
            let appObj = { ...location.data(), ['id']: currentID }
            locations.push(appObj)

            //locations.push(location.data())
          })
          setLocations(locations)
        })
  }

  useEffect(() => {
    fetchLocation();
  }, [])

  function function123(){
    console.log("Hello World!")
  }

  return (
    <div className="App" style={{ 
      backgroundImage: "url(" + background + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <ul className="TopBar">
        <li><Image src={logo} roundedCircle /></li>
        <li>
          <ul className="LoginBox">        
            <li>
              <Button variant="light">
                Login
              </Button>
            </li>
            <li>
              <Button variant="dark">
                Sign Up
              </Button>{' '}
            </li>
          </ul>
        </li>
      </ul>

      <ul className="Content">
        <li>
          <ul className="Locations">
            <li>
              <h1 style={{color:"white"}}>Today's Ratings</h1>
            </li>
            {
              locations && locations.map(locations=>{
                return(
                  <li>
                    <div className="location-container">
                      <Button variant="dark" size="lg">
                        <h2>{locations.name}   {locations.score}/5</h2>
                      </Button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </li>
        <li>
          <ul className="Hots">
            <li>
              <h1 style={{color:"white"}}>Hot Items</h1>
            </li>
            <li>
              <Button variant="dark" size="lg">
                <h6>Goat's Head</h6>
                <h2>Cheese Borgor</h2>
              </Button>{' '}
            </li>
            <li>
              <Button variant="dark" size="lg">
                <h6>Morgan</h6>
                <h2>Pizza</h2>
              </Button>{' '}
            </li>
            <li>
              <Button variant="light" size="lg">
                <h2>GET FREE SHIT</h2>
              </Button>{' '}
            </li>
          </ul>
        </li>
      </ul>

    </div>
  );
}

export default App;
