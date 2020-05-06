import React from 'react';



const HomeHeader = () => {
    return (
        <div>
            <div className=" [ header ] ">
                <h1 className=" [ header-text ] ">Which hotel would you like to visit?</h1>

                <div className=" [ header-search col-6 m-auto ] ">
                    <input className=" [ header-search-input col-10 ] " type="search" name="search" placeholder="E.g Sunset" />
                    <button type="submit" className=" [ header-search-btn col-2 ] ">Search<i className=" [ fa fa-search header-search-btn-icon ] "></i></button>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;