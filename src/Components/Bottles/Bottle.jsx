import React from 'react';
import "./Bottle.css";

const Bottle = ({ bottle }) => {
    const { name, material, capacity, price } = bottle;
    return (
        <div className='bottle'>
            <h6>Name:{name}</h6>
            <h6>material:{material}</h6>
            <h6>capacity:{capacity}</h6>
            <h6>price:{price}</h6>
        </div>
    );
};

export default Bottle;