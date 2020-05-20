import React from 'react';


const PromotionBoxes = () => {
    return (
            <div className=" [ promotion d-flex jc-between col-9 col-t-11 ] ">
                <div className=" [ promotion-box col-3 col-t-3 ] ">
                    <img className=" [ promotion-box-img col-12 col-t-12 ] " src={require('./../../Assets/holidaze_travel.png')} alt="Tired of work?" />
                    <div className=" [ promotion-box-text ] ">
                        <h3 className=" [ promotion-box-text-h3 ] ">Tired of work? </h3>
                        <a href="https://placeholder.com/" target="_blank" className=" [ link ] ">Check our travel suggestions!</a>
                    </div>
                </div>
                <div className=" [ promotion-box col-3 col-t-3 ] ">
                    <img className=" [ promotion-box-img col-12 col-t-12 ] " src={require('./../../Assets/holidaze_flysafe.jpg')} alt="Tired of work?" />
                    <div className=" [ promotion-box-text ] ">
                        <h3 className=" [ promotion-box-text-h3 ] ">Fly safe, fast, cheap! </h3>
                        <a href="https://placeholder.com/" target="_blank" className=" [ link ] ">Check our flights!</a>
                    </div>
                </div>
                <div className=" [ promotion-box col-3 col-t-3 ] ">
                    <img className=" [ promotion-box-img col-12 col-t-12 ] " src={require('./../../Assets/holidaze_roadtrip.jpg')} alt="Tired of work?" />
                    <div className=" [ promotion-box-text ] ">
                        <h3 className=" [ promotion-box-text-h3 ] ">Roadtrip at the coast? </h3>
                        <a href="https://placeholder.com/" target="_blank" className=" [ link ] ">Check our rental cars!</a>
                    </div>
                </div>
            </div>
    );
}

export default PromotionBoxes;