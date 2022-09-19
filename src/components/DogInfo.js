import React from "react";

function DogInfo({ dog, setDog }){
    const {name, image, isGoodDog} = dog

    function handleGoodDogChange(){
        fetch(`http://localhost:3001/pups/${dog.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "isGoodDog": (!isGoodDog)
          })
        })
        .then((r) => r.json())
        .then((updatedDog) => setDog(updatedDog))
      }

    return (
        <>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <button onClick={handleGoodDogChange}>{isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </>
    )
}

export default DogInfo