import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeHeader from '../components/home/homeHeader';
import PromotionBoxes from '../components/home/promotionBoxes';
import WinterHoliday from './../components/home/winterHoliday';
import { GET_ESTABLISHMENTS } from './../constants/constants';
import { Link } from 'react-router-dom';

export default function Home() {
    const [allEstablishments, setAllEstablishments] = useState(undefined);
    const [establishmentNine, setEstablishmentNine] = useState("no data");
    const [isSearched, setIsSearched] = useState(false);
    const [searchReturned, setSearchReturned] = useState([]);

    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
            .then((result) => {
                setAllEstablishments(result.data);
                setEstablishmentNine(result.data[9]);
            })
    }, [])
    //console.log(establishmentNine.imageUrl);
    // http://localhost/holidaze/get-establishments.php


    const handleFiltering = (input) => {
        setIsSearched(true)
        let setFilteredSearch = allEstablishments.filter((value) => {
            return value.establishmentName.toLowerCase().includes((input.target.value).toLowerCase())
        })
        setSearchReturned(setFilteredSearch);
    }
    console.log("searchReturned = ", searchReturned);
    return (
        <div className=' [  ] '>
            <div>
                <div className=" [ header ] ">
                    <h1 className=" [ header-text ] ">Which hotel would you like to visit?</h1>
                    <div className=" [ header-search col-6 m-auto ] ">
                        <input
                            className=" [ header-search-input col-10 ] "
                            type="search"
                            name="search"
                            placeholder="E.g Sunset"
                            onChange={handleFiltering}
                        />
                        <button type="submit" className=" [ header-search-btn col-2 ] ">Search<i className=" [ fa fa-search header-search-btn-icon ] "></i></button>
                    </div>
                    <div className=" [ header-search-dropdown col-5 ] ">
                        <ul className=" [ header-search-dropdown-ul col-10 m-auto ] ">
                            {
                                (!isSearched) ?
                                    <>
                                        {
                                            (allEstablishments !== undefined) ?
                                                allEstablishments.map((value, index) => {
                                                    return <HomeHeader key={index}
                                                        establishmentName={value.establishmentName}
                                                        price={value.price}

                                                    />
                                                }) :
                                                <div className=' [ d-flex justify-content-center col-md-3 ] '>
                                                    <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                                                </div>
                                        }
                                    </> : <> {
                                        (searchReturned !== undefined) ?
                                            searchReturned.map((value, index) => {
                                                let img;
                                                value.hasOwnProperty('imageUrl') ? img = value.imageUrl : img = 'https://via.placeholder.com/150'
                                                return <HomeHeader key={index}
                                                    establishmentName={value.establishmentName}
                                                    price={value.price}
                                                />
                                            }) :
                                            <div className=' [ d-flex justify-content-center col-md-3 ] '>
                                                <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                                            </div>
                                    }
                                    </>
                            }
                            <li className=" [ header-search-dropdown-ul ] "><Link to="/">Test</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <PromotionBoxes />
            <WinterHoliday
                image={establishmentNine.imageUrl}
            />
        </div>
    )
}