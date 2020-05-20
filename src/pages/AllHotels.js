import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './../components/navbar';
import Footer from './../components/footer';

import { GET_ESTABLISHMENTS } from './../constants/constants';
import AllHotelsCard from './../components/allHotels';

export default function AllHotels() {
    const [allEstablishments, setAllEstablishments] = useState(undefined);
    const [isSearched, setIsSearched] = useState(false);
    const [searchReturned, setSearchReturned] = useState([]);

    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
            .then((result) => {
                setAllEstablishments(result.data);
            })
    }, [])
    console.log(allEstablishments)

    const handleFiltering = (input) => {
        setIsSearched(true)
        let setFilteredSearch = allEstablishments.filter((value) => {
            return value.establishmentName.toLowerCase().includes((input.target.value).toLowerCase())
        })
        setSearchReturned(setFilteredSearch);
    }

    console.log("searched = ", searchReturned)
    return (
        <>
            <Navbar />
            <div className=" [ container ] ">
                <h1 className=" [ text-center ] ">All hotels</h1>
                <div className=" [ header-search col-6 col-t-10 m-auto allHotels ] ">
                    <input
                        autoComplete="off"
                        className=" [ header-search-input input-padding col-10 col-t-10 ] "
                        type="search"
                        name="search"
                        placeholder="E.g Sunset"
                        onChange={handleFiltering}
                    />
                    <Link to={`/allHotels`} className=" [ header-search-btn col-2 col-t-2 ] ">Search<i className=" [ fa fa-search header-search-btn-icon ] "></i></Link>
                </div>
                <div className=" [ col-10 m-auto d-flex jc-between flex-wrap ] ">
                    {
                        (!isSearched) ?
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
                            </> : <> {
                                (searchReturned !== undefined) ?
                                    searchReturned.map((value, index) => {
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
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}