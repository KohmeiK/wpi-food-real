import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './App.css';
import React, {useState,useEffect} from "react";
import firebase from "firebase";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import Accordion from 'react-bootstrap/Accordion'
import ReactStars from 'react-rating-stars-component';

function App() {
  const firebaseApp = firebase.apps[0];
  
  var db = firebase.firestore();
  
  const [food,setFood]=useState()
  const [loading, setLoading] = useState(true)

  var starRating = 0;

  function rate(score, comment){

    var foodPath = ""

    var docRef = db.collection("locations")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            var locID = doc.id
            var docRef2 = db.collection("locations/" + locID+ "/currentFoods")
                .get()
                .then(function(querySnapshot2) {
                  querySnapshot2.forEach(function(doc2) {
                    if (doc2.id == id) {
                      foodPath = doc2.data()["food"]
                    }
                  })
                })
          })
        })

    var docRef3 = db.collection(foodPath + "/ratings").set({

    })

  }

  function getFoodName(path) {
    var docRef = db.doc(path)
    docRef.get().then(function(doc) {
      return doc.data()["name"]
    })
  }

  const fetchFood = () => {
   
    var docRef = db.collection('foods').doc('y1Q1mD09L8CAa79tzZPI');

    docRef.get().then(function(doc) {
        if (doc.exists) {
            setFood(doc.data())
            setLoading(false)
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  useEffect(() => {
    fetchFood();
  }, [])



  const starFormat = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 4,
    color: "black",
    activeColor: "red",
    onChange: newValue => {
      starRating = newValue;
      console.log(newValue)
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
          <ul className="Locations">
            <li>
              <h1 style={{color:"white"}}>{loading ? 'loading' : food.name}</h1>
              <h1 style={{color:"white"}}>{loading ? 'loading' : food.score}/5 (average rating)</h1>
              <ReactStars id="ratings" {...starFormat} />
              <li>
                <Button variant="dark" onClick={() => getFoodName()}>
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
