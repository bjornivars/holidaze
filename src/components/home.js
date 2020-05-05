import React from 'react';



const HomePage = () => {
    return (
        <div>
            <div className=" [ header ] ">
                <h1 className=" [ header-text ] ">HOME</h1>
                <img className=" [ col-12 header-img ] " src={require("./../Assets/holidaze_HeaderImage.png")} alt="Holidaze Header" />
            </div>
        </div>
    );
}

export default HomePage;