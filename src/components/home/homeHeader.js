import React from 'react';
import { Link } from 'react-router-dom';


const HomeHeader = ({ establishmentName, price, id }) => {
    return (
        <div>

            <div className=" [ header-search-dropdown-ul ] ">
                <Link to={`/hotel-specific/${id}`} className=" [ header-search-dropdown-ul-link ] ">
                    <div className=" [ d-flex  ] ">
                        <i className=" [ fa fa-h-square ] "></i>
                        <div className=" [ header-search-dropdown-ul-text ] ">
                            <h3 className=" [ m-0 searchResult ] ">{establishmentName}</h3>
                            <p className=" [ m-0 orange ] ">${price} per night</p>
                        </div>
                    </div>
                </Link></div>
            {/*             <div className=" [ header ] ">
                <h1 className=" [ header-text ] ">Which hotel would you like to visit?</h1>
                <div className=" [ header-search col-6 m-auto ] ">
                    <input className=" [ header-search-input col-10 ] " type="search" name="search" placeholder="E.g Sunset" />
                    <button type="submit" className=" [ header-search-btn col-2 ] ">Search<i className=" [ fa fa-search header-search-btn-icon ] "></i></button>
                </div>
            </div> */}
        </div>
    );
}

export default HomeHeader;