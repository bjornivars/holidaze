import React from 'react';

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
    showModal,
}) => {
    return (
        <div>
            <div className=" [ specific ] ">
                <div className=" [ specific-header ] ">
                    <img className=" [ specific-header-img ] " src={imageUrl} alt={establishmentName} />
                </div>
                <div className=" [ specific-details col-8 m-auto ] ">
                    <h1 className=' [ heading text-center ] '>{establishmentName}</h1>
                    <div className=" [ specific-details-icons col-10 m-auto d-flex jc-between ] ">
                        <div className={(selfCatering === "true") ? " [ specific-details-icons-box d-block col-3 ] " : " [ d-none ] "}>
                            <div className=" [ orangBox ] ">
                                <i className=" [ fa fa-coffee ] "></i>
                            </div>
                            <p className=" [ text-center ] ">Breakfast included ({selfCatering})</p>
                        </div>
                        <div className=" [ specific-details-icons-box d-block col-3 ] ">
                            <div className=" [ orangBox ] ">
                                <i className=" [ fa fa-users ] "></i>
                            </div>
                            <p className=" [ text-center ] ">Max {maxGuests} guests</p>
                        </div>
                        <div className=" [ specific-details-icons-box d-block col-3 ] ">
                            <div className=" [ orangBox ] ">
                                <i className=" [ fa fa-envelope ] "></i>
                            </div>
                            <p className=" [ text-center ] ">{establishmentEmail}</p>
                        </div>
                        <div className=" [ specific-details-icons-box d-block col-3 ] ">
                            <div className=" [ orangBox ] ">
                                <i className=" [ fa fa-map-marker ] "></i>
                            </div>
                            <p className=" [ text-center ] ">{googleLat} , {googleLong} </p>
                        </div>
                    </div>
                    <div className=" [ col-10 m-auto d-flex jc-between ] ">


                        <div className=" [ placeholder col-7 ] ">
                            <div className=" [ specific-details-description col-12 m-auto ] ">
                                <h2>Description</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default HotelClick;