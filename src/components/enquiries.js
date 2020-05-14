import React from 'react';

const AllEnquiries = ({ establishment, clientName, email, checkin, checkout, comment }) => {

    return (
        <div className=" [ col-12 ] ">
            <div className=" [ enquiry col-6 ] ">
                <h2 className=" [ enquiry-establishment ] ">{establishment}</h2>
                <h3 className=" [ enquiry-name ] ">{clientName}</h3>
                <p className=" [ enquiry-email ] ">{email}</p>
                <div className=" [ d-flex jc-between ] ">
                    <div>
                    <span>{checkin}</span>

                    </div>
                    <div>
                        <span>{checkout}</span>
                    </div>
                </div>
            </div>
            <div className=" [ col-6 ] ">
                <div>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    )
}


export default AllEnquiries;