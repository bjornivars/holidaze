import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './../components/navbar';
import Footer from './../components/footer';

import HotelClick from './../components/hotelSpecific';
import { GET_ESTABLISHMENTS } from './../constants/constants';
import Modal from './../components/testModal';
import EstablishmentMap from '././../components/googleMap';


export default function HotelSpecific() {
    let { id } = useParams();
    const [hotelResult, setHotelResult] = useState(undefined);
    const [openModal, setOpenModal] = useState(false);
    const [breakfastIncluded, setBreakfastIncluded] = useState(false)

    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
            .then((result) => {
                setHotelResult(result.data[id]);
            })
    }, [id])

    /*          console.log(hotelResult)
            console.log({ id }); 
     */

    const showModalss = (e) => {
        setOpenModal(true);
    }
    const closeModalss = () => {
        setOpenModal(false);
    }

    return (
        <>
            <Navbar />
            <div>
                {openModal && <Modal
                    establishmentName={hotelResult.establishmentName}
                    closeModal={closeModalss}
                />}
                <div className=' [ mb-5 ] '>

                    <div className=' [ row ] '>
                        <div className=' [ col-md-12 ] '>
                            {
                                (hotelResult !== undefined) ?
                                    <HotelClick
                                        establishmentName={hotelResult.establishmentName}
                                        imageUrl={hotelResult.imageUrl}
                                        id={hotelResult.id}
                                        price={hotelResult.price}
                                        description={hotelResult.description}
                                        maxGuests={hotelResult.maxGuests}
                                        establishmentEmail={hotelResult.establishmentEmail}
                                        googleLat={hotelResult.googleLat}
                                        googleLong={hotelResult.googleLong}
                                        selfCatering={hotelResult.selfCatering}
                                    //showModal={showModalss}
                                    /> :
                                    <div className=' [ d-flex justify-content-center col-md-6 ] '>
                                        <img className=' [ w-100 ] ' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                                    </div>
                            }

                        </div>
                        <div className=" [ col-8 col-t-10 m-auto ] ">
                            <div className=" [ col-10 m-auto ] ">
                                <h3>Where to find us</h3>
                                {
                                    (hotelResult !== undefined) ?
                                        <EstablishmentMap
                                            latitude={hotelResult.googleLat}
                                            longitude={hotelResult.googleLong}
                                        />
                                        : <div className=' [ d-flex justify-content-center col-md-6 ] '>
                                            <img className=' [ w-100 ] ' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                                        </div>
                                }
                            </div>
                        </div>
                    </div>

                    {/*                 <div className=' [ d-flex justify-content-center mt-5 ] '>
                    <button className=' [ btn btn-primary ] '><Link to='/' className=' [ btn-primary-a ] '>{'Back to Homepage'}</Link></button>
                </div> */}
                </div>
                {
                    (hotelResult !== undefined) ?
                        <div className=" [  col-4 d-flex jc-center m-auto ] ">
                            <button className=" [ btn bookingBtn ] " onClick={showModalss}>Book for ${hotelResult.price} per night</button>
                        </div> : <div className=' [ d-flex justify-content-center col-md-6 ] '>
                            <img className=' [ w-100 ] ' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                        </div>
                }
            </div>
            <Footer />
        </>
    )
}

/*  */