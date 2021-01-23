import logo from './logo.svg';
import './App.css';
import React from "react";
import firebase from "firebase";

function App() {
  const firebaseApp = firebase.apps[0];

  var db = firebase.firestore();

  function function123(){
    db.collection("foods").add({
      first:"Name",
      seccond:"Hello"
    })
    .then(function(docRef) {
      console.log("Written!!!")
    })
  }

  return (
    <div className="App">
      <h5>{JSON.stringify(firebaseApp.options, null, 2)}</h5>
      <h1>Just to give you some basic html looking code</h1>
      also note css styling is applied
      <h5>Occasionally auto-refresh breaks! Just force refresh with Control+Shift+R</h5>

      <button onClick={function123}>
        Here is my button2
      </button>

    </div>
  );
}

export default App;

// <div className="RedBox">
//   <ul>
//     <li> Item 1</li>
//     <li> Item 2</li>
//     <li> Item 4</li>
//   </ul>
// </div>
// <div>
//   <ul className="BlueBox">
//     <li className="Left"> Left</li>
//     <li className="Right"> Right</li>
//   </ul>
// </div>
