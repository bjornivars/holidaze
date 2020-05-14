import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './../components/navbar';
import Footer from './../components/footer';

import { GET_ESTABLISHMENTS } from './../constants/constants';
import AllHotelsCard from './../components/allHotels';

export default function AllHotels() {
    const [allEstablishments, setAllEstablishments] = useState(undefined);


    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
            .then((result) => {
                setAllEstablishments(result.data);
            })
    }, [])
    console.log(allEstablishments)
    return (
        <>
        <Navbar />
        <div className=" [ container ] ">
            <h1 className=" [ text-center ] ">All hotels</h1>
            <div className=" [ col-10 m-auto  d-flex jc-between flex-wrap ] ">
                <>
                    {
                        (allEstablishments !== undefined) ?
                            allEstablishments.map((value, index) => {
                                return <AllHotelsCard key={index}
                                    establishmentName={value.establishmentName}
                                    price={value.price}
                                    id={value.id}
                                    imageUrl={value.imageUrl}
                                    description={value.description}
                                    maxGuests={value.maxGuests}
                                />
                            }) :
                            <div className=' [ d-flex justify-content-center col-md-3 ] '>
                                <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                            </div>
                    }
                </>
            </div>
        </div>
        <Footer /> 
        </>
    )
}