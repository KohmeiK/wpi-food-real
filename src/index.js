import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyDGbeYDIpg9E90A5JeR2YlRdfCJAV2feQw",
  authDomain: "wpi-chartwells-review.firebaseapp.com",
  projectId: "wpi-chartwells-review",
  storageBucket: "wpi-chartwells-review.appspot.com",
  messagingSenderId: "16789420987",
  appId: "1:16789420987:web:001148485b2beac9f2a29e",
  measurementId: "G-4X09ECGM4Y"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
