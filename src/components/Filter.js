import React from "react";

function Filter({ filter, setFilter }){

    function handleClick(){
        setFilter(!filter)
    }
    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={handleClick}>Filter good dogs: {filter ? 'ON' : 'OFF'}</button>
        </div>
    )
}

export default Filter