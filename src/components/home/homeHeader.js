import React from 'react';



const HomeHeader = () => {
    return (
        <div>
            <div className=" [ header ] ">
                <h1 className=" [ header-text ] ">Which hotel would you like to visit?</h1>

                <div className=" [ header-search ] ">
                    <div class="searchContainer">
                        <i class="fa fa-search searchIcon"></i>
                        <input class="searchBox" type="search" name="search" placeholder="Search..." />
                        <button type="submit"><i class="fa fa-search"></i></button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;