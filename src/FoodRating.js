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
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function FoodRating() {

    let { id } = useParams();

    const firebaseApp = firebase.apps[0];
    
    var db = firebase.firestore();
    
    const [food,setFood]=useState()
    const [loading, setLoading] = useState(true)

    var temp = 0;

    /*function storeDB(){
        const data = {
        value: temp,
        }
        console.log(data)
        const res = db.collection('foods').doc(id).collection('ratings').add;
    }*/

    const fetchFood = () => {
    
        var docRef = db.collection('foods').doc(id);

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



    const thirdExample = {
        size: 40,
        count: 5,
        isHalf: false,
        value: 4,
        color: "black",
        activeColor: "red",
        onChange: newValue => {
        temp = newValue;
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
            <li><Link to="/loggedin"><Image src={logo} roundedCircle /></Link></li>
            <li>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Name
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Redeem Points</Dropdown.Item>
                <Link to="/"><Dropdown.Item href="#/action-2">Log Out</Dropdown.Item></Link>
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

export default FoodRating;
