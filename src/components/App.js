import React, {useEffect, useState} from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo";
import Filter from "./Filter";

function App() {
  const [dogs, setDogs] = useState([])
  const [selectedDog, setSelectedDog] = useState(false)
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then((r) => r.json())
    .then((dogData) => setDogs(dogData))
  }, [selectedDog]);

  const filteredDogs = dogs.filter((dog) => {
    if (filter === false){return dog}
    else{return dog.isGoodDog === true}
  })




  return (
    <div className="App">
     <Filter filter={filter} setFilter={setFilter}/>
      <DogBar dogs={filteredDogs} setSelectedDog={setSelectedDog}/>
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
