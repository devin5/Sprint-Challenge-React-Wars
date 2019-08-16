
import React, {useState, useEffect} from "react"; 

import axios from "axios"; 
import "./App.css";
import StarCard from "./components/StarCard"

const App = () => {
  var starURL = "https://swapi.co/api/people/"; 
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    axios.get(starURL)
      .then((response) => {
        console.log(response); 
        setCharData(response.data.results)
        
      }).catch((error) => {
        console.log("Error: " + error); 
      }); 
  }, []); // No state or props synchronized with this. 


  return (
    <div className="App">
      
      {charData.map( (char) => (
        <StarCard char = {char} />
      ))}

      
    </div>
    
  );
  }
  
export default App;

