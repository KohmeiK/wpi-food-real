import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './SignInHome.css';
import React, {useState,useEffect} from "react";
import firebase from "firebase";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function SignInHome() {
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
                <Link to="/loggedin">
                  Login
                </Link>
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
            {
              locations && locations.map(locations=>{
                var topFood = locations.topFood;
                return(
                  <li>
                    <div className="suggestion-container">
                      <Button variant="dark" size="lg">
                      <h6>{locations.name}</h6>
                      <h2>{topFood}</h2>
                      </Button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </li>
      </ul>

    </div>
  );
}

export default SignInHome;
