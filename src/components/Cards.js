import React, {useState} from 'react';
//import {handleRemovetour} from 'App.js';

export default function Cards({id, name, info, image, price, handleRemovetour}){
    const [readmore, setReadmore] = useState(false);

    function handleReadmore(){
        setReadmore(!readmore);
    }
    const description = readmore ? info : `${info.substring(0, 200)}...`;
    

    return (
        <div className="card">
            <img src={image} alt="img" className="image"></img>
            <div className="tour-info">
            <div className='tour-details'>
                <h4 className='tour-price'> {price} </h4>
                <h4 className= 'tour-name'> {name} </h4>
            </div>
            <div className="description"> {description}
                <span className="read-more" onClick= {handleReadmore} > {readmore ? `show less` : `read more`} </span> 
            </div>
            </div>
            <button className='btn-red'  onClick={ () => handleRemovetour(id)} > Not Interested </button>
        </div>
    );
}