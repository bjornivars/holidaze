import React from 'react';
import { Link } from 'react-router-dom';


const WinterHoliday = ({ image }) => {
    return (
        <div>
            <div className=" [ winterholiday col-12 ] ">
                <div className=" [ d-flex col-9 m-auto ] ">
                    <img src={image} alt="Winter Holiday?" className=" [ winterholiday-img ] " />
                    <div className=" [ winterholiday-box ] ">
                        <h2 className=" [ white m-auto ] ">Winter Holiday?</h2>
                        <p className=" [ winterholiday-box-p white col-8 ] ">
                            Winter Holiday is our brand new holiday package.
                            Experience the beautiful nature in the northern part
                            of the globe. Skiing, saunas, reindeers, and cozy nights
                            are just hints of what you can expect!
                        </p>
                        <Link to="/" className=" [ btn ] ">Check it out!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WinterHoliday;