
import React, { useState, useEffect } from 'react';
import AdminNavbar from './../components/adminNavbar';
import { GET_ENQUIRIES } from './../constants/constants';
import axios from 'axios';
import AllEnquiries from './../components/enquiries';

export default function Enquiries(props) {
    const [allEnquiries, setAllEnquiries] = useState(undefined);

    useEffect(() => {
        axios.get(GET_ENQUIRIES)
            .then((result) => {
                setAllEnquiries(result.data);
            })
    }, [])
    console.log(allEnquiries)




    return (
        <div>
            <AdminNavbar />
            <h1 className="container text-center">Enquiries</h1>
            <>
                {
                    (allEnquiries !== undefined) ?
                        allEnquiries.slice(0).reverse().map((value, index) => {
                            return <AllEnquiries key={index}
                                establishment={value.establishment}
                                clientName={value.clientName}
                                email={value.email}
                                checkin={value.checkin}
                                checkout={value.checkout}
                                notes={value.notes}
                            />
                        }) :
                        <div className=' [ d-flex justify-content-center col-md-3 ] '>
                            <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                        </div>
                }
            </>
        </div>
    )
}