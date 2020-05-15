import React from 'react';

const AllEnquiries = ({ establishment, clientName, email, checkin, checkout, notes, confirm }) => {

    return (
        <div className=" [ enquiry col-8 d-flex jc-center m-auto ] ">
            <div className=" [  col-6 enquiry-box ] ">
                <h2 className=" [ enquiry-establishment ] ">{establishment}</h2>
                <h3 className=" [ enquiry-name ] ">{clientName}</h3>
                <p className=" [ enquiry-email ] ">{email}</p>
                <div className=" [ d-flex jc-between col-6 ] ">
                    <div>
                    <span>{checkin}</span>

                    </div>
                    <div>
                        <span>-</span>
                    </div>
                    <div>
                        <span>{checkout}</span>
                    </div>
                </div>
            </div>
            <div className=" [ col-6 ] ">
                <div>
                    <p>{notes}</p>
                </div>
                <button onClick={confirm}>Confirm</button>
            </div>
        </div>
    )
}


export default AllEnquiries;