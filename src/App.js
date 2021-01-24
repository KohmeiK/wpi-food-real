import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './App.css';
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

import GoatsHeadMenu from "./GoatsHeadMenu"
import LoggedInHome from "./LoggedInHome"
import SignInHome from "./SignInHome"
// import GoatsHeadMenu from "./GoatsHeadMenu"


function App() {

  return (
    <Router>
        <Switch>
          <Route path="/loggedin">
            <LoggedInHome />
          </Route>
          <Route path="/daka">
            <GoatsHeadMenu />
          </Route>
          <Route path="/:id" children={<GoatsHeadMenu />}/>
          <Route path="/">
            <SignInHome />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
