import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './App.css';
import React from "react";
import firebase from "firebase";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

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

      

      {/*<Form>
        <Form.Control placeholder="Search Food" />
      </Form> */}
         <u1 className="text-center"> 
            <Form inline>
            <FormControl type="text" placeholder="Filter foods" className="mr-sm-2" />
            <Button variant="dark">Search</Button>
            </Form>
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
          <ul className="Hots">
            <li>
              <h1 style={{color:"white"}}>Suggestions</h1>
            </li>
            <li>
              <Button variant="light" size="lg">
                <h2>DON'T FORGET TO LEAVE A REVIEW</h2>
              </Button>{' '}
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
          </ul>
        </li>
      </ul>

    </div>
  );
}

export default App;
