import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './../components/navbar';
import Footer from './../components/footer';

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
    const [showDropdown, setshowDropdown] = useState(false);

    const openDropdown = () => {
        setshowDropdown(true);
    }
    const closeDropdown = () => {
        setshowDropdown(false);
    }
    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
            .then((result) => {
                setAllEstablishments(result.data);
                setEstablishmentNine(result.data[9]);
            })
    }, [])
    //console.log(establishmentNine.imageUrl);
    // http://localhost/holidaze/get-establishments.php

    const doNada = () => {
    }
    const handleFiltering = (input) => {
        setIsSearched(true)
        let setFilteredSearch = allEstablishments.filter((value) => {
            return value.establishmentName.toLowerCase().includes((input.target.value).toLowerCase())
        })
        setSearchReturned(setFilteredSearch);
    }

    const onSearch = () => {
        sessionStorage.clear();
        sessionStorage.setItem("searched", searchReturned[0].establishmentName)
    }
    console.log("searchReturned = ", searchReturned);
    return (
        <>
            <Navbar />
            <div className=' [  ] '>
                <div>
                    <div className=" [ header ] " onClick={(showDropdown === true && isSearched === false) ? closeDropdown : doNada}>
                        <h1 className=" [ header-text ] ">Which hotel would you like to visit?</h1>
                        <div className=" [ header-search col-6 col-t-8 m-auto ] ">
                            <input
                                autoComplete="off"
                                className=" [ header-search-input input-padding col-10 col-t-10 ] "
                                type="search"
                                name="search"
                                placeholder="E.g Sunset"
                                onChange={handleFiltering}
                                onClick={(showDropdown !== true && isSearched === false) ? openDropdown : closeDropdown}
                            />
                            <Link to={`/allHotels`} className=" [ header-search-btn col-2 ] " onClick={onSearch}>Search<i className=" [ fa fa-search header-search-btn-icon ] "></i></Link>
                        </div>
                        <div className={(showDropdown !== true && isSearched === false) ? ' [ d-none ] ' : ' [ d-block header-search-dropdown col-5 col-t-6 ] '}>
                            <ul className=" [ searchUl col-12 m-auto ] ">
                                {
                                    (!isSearched) ?
                                        <>
                                            {
                                                (allEstablishments !== undefined) ?
                                                    allEstablishments.slice(0, 4).map((value, index) => {
                                                        return <HomeHeader key={index}
                                                            establishmentName={value.establishmentName}
                                                            price={value.price}
                                                            id={value.id}
                                                        />
                                                    }) :
                                                    <div className=' [ d-flex justify-content-center col-md-3 ] '>
                                                        <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                                                    </div>
                                            }
                                        </> : <> {
                                            (searchReturned !== undefined) ?
                                                searchReturned.slice(0, 10).map((value, index) => {
                                                    return <HomeHeader key={index}
                                                        establishmentName={value.establishmentName}
                                                        price={value.price}
                                                        id={value.id}
                                                    />
                                                }) :
                                                <div className=' [ d-flex justify-content-center col-md-3 ] '>
                                                    <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                                                </div>
                                        }
                                        </>
                                }
                            </ul>
                            <div className=" [ d-flex jc-center ] ">
                                <Link to="/allHotels" className=" [ btn header-search-dropdown-btn ] ">Se all hotels</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <PromotionBoxes />
                <WinterHoliday
                    image={establishmentNine.imageUrl}
                />
            </div>
            <Footer />
        </>
    )
}