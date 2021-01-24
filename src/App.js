import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './App.css';
import React, {useState,useEffect} from "react";
import firebase from "firebase";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

function App() {
  var db = firebase.firestore();
  
  const locationReference = db.collection('locations').doc('P5UuSiaMYnLLN6mE7zHN')
  const [foods,setFoods]=useState([])

  const fetchFood=async()=>{
    const foods = []
    db.collection('foods').where("location", '==', locationReference).get()
      .then(snapshot => {
        snapshot.docs.forEach(food => {
          console.log(food.id, " => ", food.data());

          let currentID = food.id
          let appObj = { ...food.data(), ['id:']: currentID }
          
          foods.push(appObj)
          //console.log(foods);
        })
        setFoods(foods)
      })
  }

  useEffect(() => {
    fetchFood();
  }, [])

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

      <ul className="Content">
        <li>
          <ul className="Menu">
            <li>
              <h1 style={{color:"white"}}>Goat's Head Menu</h1>
            </li>
            {
              foods && foods.map(foods=>{
                return(
                  <li>
                    <div className="location-container">
                      <Button variant="dark" size="sm">
                        <h2>{foods.name}</h2>
                      </Button>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </li>
        <li>
          <u1 className="text-center"> 
            <Form inline>
              <FormControl type="text" placeholder="Filter foods" className="mr-sm-2" />
              <Button variant="dark">Search</Button>
            </Form>
          </u1>
        </li>
      </ul>

    </div>
  );
}

export default App;
