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
    selfCatering,
    openModal
}) => {
    return (
        <div>
            <div className=" [ specific ] ">
                <div className=" [ specific-header ] ">
                    <img className=" [ specific-header-img ] " src={imageUrl} alt={establishmentName} />
                </div>
                <div className=" [ specific-details col-8 m-auto ] ">
                    <h1 className=' [ heading text-center ] '>{establishmentName}</h1>
                    <div className=" [ specific-details-description col-10 m-auto ] ">
                        <p>{description}</p>
                    </div>

                    <div className=" [ specific-details-icons col-10 m-auto d-flex jc-between ] ">
                        <div className=" [ specific-details-icons-box d-block col-3 ] ">
                            <div className=" [ orangBox ] ">
                                <i className="fa fa-coffee"></i>
                            </div>
                            <p className=" [ text-center ] ">Breakfast included ({selfCatering})</p>
                        </div>
                        <div className=" [ specific-details-icons-box d-block col-3 ] ">
                            <div className=" [ orangBox ] ">
                                <i className="fa fa-users"></i>
                            </div>
                            <p className=" [ text-center ] ">Max {maxGuests} guests</p>
                        </div>
                        <div className=" [ specific-details-icons-box d-block col-3 ] ">
                            <div className=" [ orangBox ] ">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <p className=" [ text-center ] ">{establishmentEmail}</p>
                        </div>
                        <div className=" [ specific-details-icons-box d-block col-3 ] ">
                            <div className=" [ orangBox ] ">
                                <i className="fa fa-map-marker"></i>
                            </div>
                            <p className=" [ text-center ] ">{googleLat} , {googleLong} </p>
                        </div>
                    </div>
                    <div className=" [  col-12 d-flex jc-center ] ">
                        <button className=" [ btn bookingBtn ] " onClick={openModal}>Book for ${price} per night</button>
                    </div>
                </div>






                {/*                 <div> {id}</div>
                <div> {price}</div>
                <div> {maxGuests}</div>
                <div> {googleLat}</div>
                <div> {establishmentEmail}</div>
                <div> {googleLong}</div>
                <div> {selfCatering}</div> */}
            </div>

        </div>

    )
}

export default HotelClick;