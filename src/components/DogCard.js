import React from "react";

function DogCard({dog, setSelectedDog}){
    function selectDog(){
        setSelectedDog(dog)
    }
    return (
        <span onClick={selectDog}>{dog.name}</span>
    )
}

export default DogCard