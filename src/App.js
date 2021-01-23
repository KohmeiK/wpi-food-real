import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './App.css';
import React from "react";
import firebase from "firebase";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

function App() {
  const firebaseApp = firebase.apps[0];
  //
  // var db = firebase.firestore();
  //

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
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Name
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Redeem Points</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>

      <u1 className="Welcome">
        <li>
        <h1 style={{color:"white"}}>Welcome, Name! Where do you want to eat?</h1>
        </li>
      </u1>
     
      <ul className="Content">
        <li>
          <ul className="Locations">
            <li>
              <h1 style={{color:"white"}}>Locations</h1>
            </li>
            <li>
              <Button variant="dark" size="lg">
                <h2>Goats Head</h2>
              </Button>{' '}
            </li>
            <li>
              <Button variant="dark" size="lg">
                <h2>Morgan</h2>
              </Button>{' '}
            </li>
            <li>
              <Button variant="dark" size="lg">
                <h2>Foise</h2>
              </Button>{' '}
            </li>
          </ul>
        </li>
        <li>
          
        </li>
      </ul>

    </div>
  );
}

export default App;
