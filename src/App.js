import logo from './logo.svg';
import './App.css';
import React from "react";
import firebase from "firebase";
import Badge from 'react-bootstrap/Badge'

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
      <div>
        <Badge variant="primary">Primary</Badge>{' '}
        <Badge variant="secondary">Secondary</Badge>{' '}
        <Badge variant="success">Success</Badge>{' '}
        <Badge variant="danger">Danger</Badge>{' '}
        <Badge variant="warning">Warning</Badge> <Badge variant="info">Info</Badge>{' '}
        <Badge variant="light">Light</Badge> <Badge variant="dark">Dark</Badge>
      </div>
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
