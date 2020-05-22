import React from 'react';

const AllEnquiries = ({ establishment, clientName, email, checkin, checkout, notes, confirm }) => {

    return (
        <div className=" [ enquiry col-8 col-t-10 d-flex jc-center m-auto ] ">
            <div className=" [  col-6 col-t-6 enquiry-box ] ">
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
            <div className=" [ col-6 col-t-6 enquiry-box-right ] ">
                <div>
                    <p className=" [ break-word ] ">{notes}</p>
                </div>
                <button className=" [ btn ] ">Checkin</button>
            </div>
        </div>
    )
}

export default AllEnquiries;