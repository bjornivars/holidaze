import React from 'react';
import { Link } from 'react-router-dom';


const AllHotelsCard = ({ imageUrl, establishmentName, id, price, description, maxGuests }) => {
    return (
        <div className=" [ col-2 hotel-card ] ">
            <Link to={`/hotelSpecific/${id}`}>
                <img className=" [ col-12 hotel-card-img ] " src={imageUrl} alt={establishmentName} />
                <div className=" [ hotel-card-text ] ">
                    <h2 className=" [ hotel-card-text-h2 ] ">{establishmentName}</h2>
                    <p className=" [ hotel-card-text-p ] ">{description}</p>
                    <div className=" [ d-flex jc-between ] ">
                        <div>
                            <i className="fa fa-users"></i><span>{maxGuests}</span>
                        </div>
                        <div>
                            <span className=" [ hotel-card-text-price ] ">${price}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default AllHotelsCard;