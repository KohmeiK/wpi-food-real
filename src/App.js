import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './App.css';
import React from "react";
import firebase from "firebase";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

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
