import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './App.css';
import React from "react";
import firebase from "firebase";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import ReactStars from "react-rating-stars-component";

function App() {
  const firebaseApp = firebase.apps[0];
  //
  // var db = firebase.firestore();
  //

  function function123(){
    console.log("Hello World!")
  }

  const thirdExample = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 4,
    color: "black",
    activeColor: "red",
    onChange: newValue => {
      console.log(`Example 3: new value is ${newValue}`);
    }
  };

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
              <h1 style={{color:"white"}}>FOOD 1: BORGAR???</h1>
              <h1 style={{color:"white"}}>???/5 (average rating)</h1>
              <ReactStars {...thirdExample} />
              <li>
              <Button variant="dark">
                Submit
              </Button>{' '}
              </li>
            </li>
            
          </ul>
        </li>
        <li>
          <ul className="Hots">
            
            <li>
            </li>
            
          </ul>
        </li>
      </ul>

    </div>
  );
}

export default App;
