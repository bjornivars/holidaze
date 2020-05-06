import React from 'react';
import { Link } from 'react-router-dom';


const PromotionBoxes = () => {
    return (
        <div>
            <div className=" [ promotion d-flex jc-between col-9 ] ">
                <div className=" [ promotion-box col-3 ] ">
                    <img className=" [ promotion-box-img col-12 ] " src={require('./../../Assets/holidaze_travel.png')} alt="Tired of work?" />
                    <div className=" [ promotion-box-text ] ">
                        <h3>Tired of work? </h3>
                        <Link to="/">Check our travel suggestions!</Link>
                    </div>
                </div>
                <div className=" [ promotion-box col-3 ] ">
                    <img className=" [ promotion-box-img col-12 ] " src={require('./../../Assets/holidaze_flysafe.jpg')} alt="Tired of work?" />
                    <div className=" [ promotion-box-text ] ">
                        <h3>Fly safe, fast, cheap! </h3>
                        <Link to="/">Check our flights!</Link>
                    </div>
                </div>
                <div className=" [ promotion-box col-3 ] ">
                    <img className=" [ promotion-box-img col-12 ] " src={require('./../../Assets/holidaze_roadtrip.jpg')} alt="Tired of work?" />
                    <div className=" [ promotion-box-text ] ">
                        <h3>Roadtrip at the coast? </h3>
                        <Link to="/">Check our rental cars!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromotionBoxes;