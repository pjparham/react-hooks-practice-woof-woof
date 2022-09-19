import React from "react";
import DogCard from "./DogCard";

function DogBar({ dogs, setSelectedDog }){
    const dogCards = dogs.map((dog) => {
        return <DogCard setSelectedDog={setSelectedDog} key={dog.id} dog={dog} /> 
    })


    return (
        <div id="dog-bar">
           {dogCards}
        </div>
    )
}

export default DogBar