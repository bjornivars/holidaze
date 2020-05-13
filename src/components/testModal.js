import React, { useState } from 'react'
//import {useDatepicker, useMonth, useDay} from '@datepicker-react/hooks';

import axios from 'axios';
import {POST_ENQUIRY} from './../constants/constants';


const Modal = ({ establishmentName,
    closeModal,
    showSuccess,
}) => {

    const [clientNameValue, setClientNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [checkinValue, setCheckinValue] = useState('');
    const [checkoutValue, setCheckoutValue] = useState('');

    const [clientNameValueError, setClientNameValueError] = useState(true);
    const [emailValueError, setEmailValueError] = useState(true);
    const [checkinValueError, setCheckinValueError] = useState(true);
    const [checkoutValueError, setCheckoutValueError] = useState(true);

    const [correctlySent, setcorrectlySent] = useState(false);

    let handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        // eslint-disable-next-line
        let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        switch (name) {
            case 'clientName':
                (value !== '') ? setClientNameValueError(false) : setClientNameValueError(true);
                setClientNameValue(value);
                break;
            case 'email':
                (emailPattern.test(value)) ? setEmailValueError(false) : setEmailValueError(true);
                setEmailValue(value);
                break;
            case 'checkin':
                (value !== '') ? setCheckinValueError(false) : setCheckinValueError(true);
                setCheckinValue(value);
                break;
            case 'checkout':
                (value !== '') ? setCheckoutValueError(false) : setCheckoutValueError(true);
                setCheckoutValue(value);
                break;
            default:
                break;
        }
        console.log(name, value)
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        if (!clientNameValueError || !emailValueError || !checkinValueError || !checkoutValueError) {
            sessionStorage.setItem('establishment', establishmentName)
            sessionStorage.setItem('clientName', clientNameValue)
            sessionStorage.setItem('email', emailValue)
            sessionStorage.setItem('checkin', checkinValue)
            sessionStorage.setItem('checkout', checkoutValue)

            var data = new FormData();
            data.append("establishment", establishmentName);
            data.append("clientName", clientNameValue);
            data.append("email", emailValue);
            data.append("checkin", checkinValue);
            data.append("checkout", checkoutValue);

            axios.post(POST_ENQUIRY, data)
                .then(response => {
                    console.log(response)
                    console.log(response.data)
                    this.filter = response.data

                })
                .catch(e => {
                    console.log("")
                    //this.errors.push(e)
                });
            console.log("sent");
            setcorrectlySent(true);
        } else {
            setcorrectlySent('Something went wrong.. Try again later');
            console.log("NOT sent");
        }
    }

    return (
        <div className=" [ modal ] ">
            <div className=" [ modal-overlay ] ">
                <div className=" [ modal-box col-6 ] ">
                    <div className=" [ d-flex jc-end ] ">
                        <i onClick={closeModal} className=" [ fa fa-times-circle closeModal ] "></i>
                    </div>
                    <h1 className={correctlySent !== true ? " [ modal-box-h1 text-center ] " : " [ d-none ] "}>{establishmentName}</h1>
                    <div className={correctlySent !== true ? " [ modal-box-form ] " : " [ d-none ] "}>
                        <form /* method="POST" action="http://localhost/holidaze/enquiry-success.phhhhhhp" */ onSubmit={handleSubmit} className=" [ enquiry-form col-10 m-auto ] ">
                            {/*   <!-- The name of establishment gets sent with the form so that only one JSON file is kept for all establishments
                            This value must be updated for each establishment. --> */}
                            <label htmlFor="establishment">Establishment</label>
                            <br />
                            <input
                                type="text"
                                name="establishment"
                                id="establishment"
                                value={establishmentName}
                                onChange={handleChange}
                                className=" [ form-input col-12 ] "
                                readOnly />
                            {/*   <!-- If additional fields are required, they must be handled in enquiry-success.php --> */}
                            <br />                  <br />
                            <label htmlFor="clientName">Full name</label>
                            <br />
                            <input
                                type="text"
                                onChange={handleChange}
                                name="clientName"
                                id="clientName"
                                className=" [ form-input col-12 ] " />
                            <br />
                            <p className={(clientNameValueError) ? ' [ errorMessage ] ' : ' [ d-none ] '}>Please enter your name</p>
                            <br />
                            <label htmlFor="email">Email Address</label>
                            <br />
                            <input
                                type="text"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                className=" [ form-input col-12 ] " />
                            <br />
                            <p className={(emailValueError) ? ' [ errorMessage ] ' : ' [ d-none ] '}>Please enter a valid email</p>
                            <br />
                            <div className=" [ form-input-dflex ] ">
                                <div className=" [ col-5 ] ">
                                    <label htmlFor="checkin" className=" [ col-12 ] ">Check-in</label>
                                    <br />
                                    <input
                                        type="date"
                                        name="checkin"
                                        id="checkin"
                                        onChange={handleChange}
                                        className=" [ form-input col-12 ] " />
                                    <br />
                                    <p className={(checkinValueError) ? ' [ errorMessage ] ' : ' [ d-none ] '}>Please insert a valid date</p>
                                </div>
                                <div className=" [ col-5 ] ">
                                    <label htmlFor="checkout" className=" [ col-12 ] ">Check-out</label>
                                    <br />
                                    <input
                                        type="date"
                                        name="checkout"
                                        id="checkout"
                                        onChange={handleChange}
                                        className=" [ form-input col-12 ] " />
                                    <p className={(checkoutValueError) ? ' [ errorMessage ] ' : ' [ d-none ] '}>Please insert a valid date</p>
                                </div>
                            </div>
                            <br />
                            <p>{correctlySent}</p>
                            <br />
                            <input type="submit" className=" [ btn ] " disabled={clientNameValueError || emailValueError || checkinValueError || checkoutValueError || correctlySent} />
                        </form>
                    </div>
                    <div className={correctlySent ? " [ modal-box-success ] " : " [ d-none ] "}>
                        <h1 className=" [ modal-box-h1 text-center ] " >Thank you for booking <br></br>{establishmentName}</h1>
                        <div className=" [ col-6 m-auto ] ">
                            <p><b>Name: </b> {clientNameValue}</p>
                            <p><b>Email: </b> {emailValue}</p>
                            <p><b>Checkin: </b> {checkinValue}</p>
                            <p><b>Checkout: </b> {checkoutValue}</p>
                            <button className=" [ btn ] " onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal;