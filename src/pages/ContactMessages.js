
import React, { useState, useEffect } from 'react';
import AdminNavbar from './../components/adminNavbar';
import {GET_CONTACTS} from './../constants/constants';
import axios from 'axios';
import AllMessages from './../components/contactMessages';

export default function ContactMessages(props) {
    const [allContactMessages, setAllContactMessages] = useState(undefined);

    const [confirmedEnquiry, setConfirmedEnquiry] = useState(false);

    useEffect(() => {
        axios.get(GET_CONTACTS)
            .then((result) => {
                setAllContactMessages(result.data);
            })
    }, [])
    console.log(allContactMessages)
    

    console.log("confirmedEnquiry = ", confirmedEnquiry);
    return (
        <div>
            <AdminNavbar />
            <h1 className="container text-center">Contact Messages</h1>
            <>
                    {
                        (allContactMessages !== undefined) ?
                        allContactMessages.slice(0).reverse().map((value, index) => {
                                return <AllMessages key={index}
                                    clientName={value.clientName}
                                    email={value.email}
                                    message={value.message}
                                />
                            }) :
                            <div className=' [ d-flex justify-content-center col-md-3 ] '>
                                <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                            </div>
                    }
                </>
        </div>
    )}