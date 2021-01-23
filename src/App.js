import logo from "./Images/WPI_logo_name_small.png";
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
    <div className="App">
      <ul className="TopBar">
        <li><Image src={logo} roundedCircle /></li>
        <li>
          <ul className="LoginBox">        
            <li>
              <Button variant="outline-dark">
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
              <h1>Today's Ratings</h1>
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
              <h1>Hot Items</h1>
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
              <Button variant="outline-secondary" size="lg">
                <h2>GET FREE SHIT</h2>
              </Button>{' '}
            </li>
          </ul>
        </li>
      </ul>

      <h1>AAAA to give you some basic html looking code</h1>
      also note css styling is applied
      <h5>Occasionally auto-refresh breaks! Just force refresh with Control+Shift+R</h5>
      
      <button onClick={function123}>
        Here is my button
      </button>

      <div className="RedBox">
        <ul>
          <li> Item 1</li>
          <li> Item 2</li>
          <li> Item 4</li>
        </ul>
      </div>

      <div>
        <ul className="BlueBox">
          <li className="Left"> Left</li>
          <li className="Right"> Right</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
