import React, { useState  } from 'react'
//import {useDatepicker, useMonth, useDay} from '@datepicker-react/hooks';

import axios from 'axios';



const Modal = ({ establishmentName,
    closeModal,
    showSuccess,
}) => {

    const [ClientName, setClientName] = useState('');
    const [Email, setEmail] = useState('');
    const [Checkin, setCheckin] = useState('');
    const [Checkout, setCheckout] = useState('');

    const [clientNameError, setClientNameError] = useState(true);
    const [emailError, setEmailError] = useState(true);
    const [checkinError, setCheckinError] = useState(true);
    const [checkoutError, setCheckoutError] = useState(true);

    const [correctlySent, setcorrectlySent] = useState(false);

    let handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        // eslint-disable-next-line
        let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        switch (name) {
            case 'clientName':
                (value !== '') ? setClientNameError(false) : setClientNameError(true);
                setClientName(value);
                break;
            case 'email':
                (emailPattern.test(value)) ? setEmailError(false) : setEmailError(true);
                setEmail(value);
                break;
            case 'checkin':
                (value !== '') ? setCheckinError(false) : setCheckinError(true);
                setCheckin(value);
                break;
            case 'checkout':
                (value !== '') ? setCheckoutError(false) : setCheckoutError(true);
                setCheckout(value);
                break;
            default:
                break;
        }
        console.log(name, value)
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        if (!clientNameError || !emailError || !checkinError || !checkoutError) {
            /*           sessionStorage.setItem('establishment', establishmentName)
                      sessionStorage.setItem('clientName', clientName)
                      sessionStorage.setItem('email', email)
                      sessionStorage.setItem('checkin', checkin)
                      sessionStorage.setItem('checkout', checkout)
           */
            var data = new FormData();
            data.append("establishment", establishmentName);
            data.append("clientName", ClientName);
            data.append("email", Email);
            data.append("checkin", Checkin);
            data.append("checkout", Checkout);

            axios.post('http://localhost/holidaze/enquiry-success.php', data)
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
                    <h1 className=" [ modal-box-h1 text-center ] ">{establishmentName}</h1>
                    <div className=" [ modal-box-form ] ">
                        <form /* method="POST" action="http://localhost/holidaze/enquiry-success.phhhhhhp" */ onSubmit={handleSubmit} className=" [ enquiry-form col-10 m-auto ] ">
                            {/*   <!-- The name of establishment gets sent with the form so that only one JSON file is kept for all establishments.
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
                            <p className={(clientNameError) ? ' [ errorMessage ] ' : ' [ d-none ] '}>Please enter your name</p>
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
                            <p className={(emailError) ? ' [ errorMessage ] ' : ' [ d-none ] '}>Please enter a valid email</p>
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
                                    <p className={(checkinError) ? ' [ errorMessage ] ' : ' [ d-none ] '}>Please insert a valid date</p>
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
                                    <p className={(checkoutError) ? ' [ errorMessage ] ' : ' [ d-none ] '}>Please insert a valid date</p>
                                </div>
                            </div>
                            <br />
                            <p>{correctlySent}</p>
                            <br />
                            <input type="submit" className=" [ btn ] " disabled={clientNameError || emailError || checkinError || checkoutError || correctlySent} />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal;