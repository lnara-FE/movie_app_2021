import React from 'react';

function Food({name, picture}) {
    return (
        <div className="food-item">
            <h2>I love {name}</h2>
            <img src={picture} alt={name}/>
        </div>
    );
}

export default Food;