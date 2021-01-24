import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './LoggedInHome.css';
import React, {useState,useEffect} from "react";
import firebase from "firebase";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function LoggedInHome() {
  const firebaseApp = firebase.apps[0];
  //
  var db = firebase.firestore();
  //
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

  return (
    <div className="App" style={{
      backgroundImage: "url(" + background + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: "100vh"
    }}>
      <ul className="TopBar">
        <li><Link to="/"><Image src={logo} roundedCircle /></Link></li>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Name
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Redeem Points</Dropdown.Item>
              <Link to="/"><Dropdown.Item href="#/action-2">Log Out</Dropdown.Item></Link>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>


      <u1 className="text-center">
        <li>
        <h1 style={{color:"white"}}>Welcome, Name! Where do you want to eat?</h1>
        </li>
      </u1>

      <ul className="text-center">
        <li>
          <ul className="Locations">
            <li>
            <h1 style={{color:"white"}}>Today's Ratings</h1>
            </li>
            {
              locations && locations.map(location=>{
                return(
                  <li>
                    <div className="location-container">
                      <Link to={`/location/${location.id}`}>
                        <Button variant="dark" size="lg">
                          <h2>{location.name}   {location.score}/5</h2>
                        </Button>
                      </Link>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </li>
        <li>

        </li>
      </ul>

    </div>
  );
}

export default LoggedInHome;
