import React from 'react';
import { Link } from 'react-router-dom';


const HotelClick = ({ imageUrl, 
                         establishmentName, 
                         id, 
                         price, 
                         description, 
                         maxGuests, 
                         establishmentEmail, 
                         googleLat,
                         googleLong,
                         selfCatering
                        }) => {
    return (
        <div>
    <div>hotel {establishmentName}</div>
    <div>hotel {id}</div>
    <div>hotel {price}</div>
    <div>hotel {description}</div>
    <div>hotel {maxGuests}</div>
    <div>hotel {googleLat}</div>
    <div>hotel {establishmentEmail}</div>
    <div>hotel {googleLong}</div>    <div>hotel {selfCatering}</div>
    </div>

    )
}

export default HotelClick;