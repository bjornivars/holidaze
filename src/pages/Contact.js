
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Contact() {
    return (
        <>
            <h1 className=" [ text-center ] ">Contact us</h1>
            <div className=" [ col-4 m-auto  d-flex jc-between flex-wrap ] ">
                <form method="POST" action="contact-success.php" className=" [ m-auto ] ">
                <label for="clientName">Full name</label><br/>
                    <div className=" [ input-container ] ">
                    <i className="fa fa-user form-input-icon"></i>
                    <input type="text" 
                    name="clientName" 
                    id="clientName" 
                    className=" [ form-input form-input-contact col-12 ] "
                    />
                    </div>
                        <label for="email">Email Address</label><br/>
                        <div className=" [ input-container ] ">
                        <i className="fa fa-envelope form-input-icon"></i>
                        <input type="text" 
                        name="email" 
                        id="email" 
                        className=" [ form-input form-input-contact col-12 ] "
                        /></div>
                            <label for="message">Message</label><br/>
                            <div className=" [ input-container ] ">

                            <i className="fa fa-comment form-input-icon form-input-icon-comment"></i>
                            <textarea name="message" 
                            id="message" 
                            rows="8" 
                            cols="80"
                            className=" [ form-input form-input-contact col-12 ] "
                            ></textarea>
                            </div>
                            <input type="submit" className=" [ btn ] "/>
                </form>
            </div>
        </>
    )
}

