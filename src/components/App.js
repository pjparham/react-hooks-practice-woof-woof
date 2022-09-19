import React, {useEffect, useState} from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then((r) => r.json())
    .then((dogData) => setDogs(dogData))
  }, []);



  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <DogBar dogs={dogs} setSelectedDog={setSelectedDog}/>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {selectedDog ? <DogInfo setDog={setSelectedDog} dog={selectedDog}/> : null  }
        </div>
      </div>
    </div>
  );
}

export default App;
