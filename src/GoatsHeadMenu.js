import logo from "./Images/WPI_logo_name_small.png";
import background from "./Images/FreshmanSkyscraper.png"
import './GoatsHeadMenu.css';
import React, {useState,useEffect} from "react";
import firebase from "firebase";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


function GoatsHeadMenu() {
  
  let { id } = useParams();

  var db = firebase.firestore();
  const [foods,setFoods]=useState([])

  const [location,setLocation]=useState()
  const [loading, setLoading] = useState(true)

  const locationReference = db.collection('locations').doc(id)

  function getFoodName(path) {
    var docRef = db.doc(path)
    docRef.get().then(function(doc) {
      return doc.data()["name"]
    })
  }
  
  function getFoodData(path) {
    var docRef = db.doc(path)
    docRef.get().then(function(doc) {
      return doc.data()
    })
  }

  const fetchFood= async()=>{
    const foods = []
    /*
    var docRef = db.collection('locations').doc("P5UuSiaMYnLLN6mE7zHN").collection('currentFoods')
    let snapshot = await docRef.get()
    console.log(snapshot.docs[0].data())
    snapshot.docs.forEach((food) => {
      let currentID = food.id
      let foodData = getFoodData(food.food)
      let appObj = { ...foodData, ['id']: currentID }
      console.log(food.id, " => ", foodData)
      foods.push(appObj)
    })*/

    db.collection('locations').get().then(snapshot => {
      snapshot.docs.forEach(currentFoods => {
        currentFoods.get().then(query => {
          query.docs.forEach(food => {
            let currentID = food.id
            let foodData = getFoodData(food.food)
            let appObj = { ...foodData, ['id']: currentID }
            console.log(food.id, " => ", foodData)
            foods.push(appObj)
          })
        })
      })
    })
    setFoods(foods);
  }

  const fetchLocation = () => {
    var docRef = locationReference;

    docRef.get().then(function(doc) {
        if (doc.exists) {
            setLocation(doc.data())
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
    fetchLocation();
  }, [])

  // The forwardRef is important!!
  // Dropdown needs access to the DOM node in order to position the Menu
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <Button variant="dark" size="md">
        <h3>{children}</h3>
      </Button>
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toString().toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

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
          <ul className="Menu">
            <li>
              <h1 style={{color:"white"}}>{loading ? 'loading' : location.name} Menu</h1>
            </li>
            {
              foods && foods.map(food=>{
                return(
                  <li>
                    <div className="location-container">
                    <Link to={`/food/${food.id}`}>
                        <Button variant="dark" size="sm">
                          <h2>{food.name}</h2>
                        </Button>
                    </Link>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </li>
        <li>
          <u1 className="search"> 
            <Dropdown>
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                Filter Menu
              </Dropdown.Toggle>
              <Dropdown.Menu as={CustomMenu}>
                {
                  foods && foods.map(food=>{
                    return(
                      <Link to={`/food/${food.id}`}>
                        <Dropdown.Item>
                              {food.name}
                        </Dropdown.Item>
                      </Link>
                    )
                  })
                }
              </Dropdown.Menu>
            </Dropdown>,
          </u1>
        </li>
      </ul>

    </div>
  );
}

export default GoatsHeadMenu;
