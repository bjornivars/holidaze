
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { POST_ENQUIRY } from './../constants/constants';


const Modal = ({ establishmentName,
    closeModal,
    showSuccess,
}) => {
    const { register, handleSubmit, errors } = useForm();
    const [success, setSuccess] = useState(false)

    const onSubmit = (data) => {
        // console.log(data);
        const form = new FormData()
        form.append('establishment', data.establishment)
        form.append('clientName', data.clientName);
        form.append('email', data.email);
        form.append('checkin', data.checkin);
        form.append('checkout', data.checkout);
        sessionStorage.setItem('establishment', data.establishment);
        sessionStorage.setItem('clientName', data.clientName);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('checkin', data.checkin);
        sessionStorage.setItem('checkout', data.checkout);
        axios.post(POST_ENQUIRY, form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(data => {//success
                setSuccess(true)
            }, error => { //failed
                setSuccess("Oops.. Something went wrong. Please try again later")
            })

    }
    console.log(errors);
    let sessionEstablishment = sessionStorage.getItem('establishment');
    let sessionClientName = sessionStorage.getItem('clientName')
    let sessionEmail = sessionStorage.getItem('email')
    let sessionCheckin = sessionStorage.getItem('checkin')
    let sessionCheckout = sessionStorage.getItem('checkout')

    return (
        <div className=" [ modal ] ">
            <div className=" [ modal-overlay ] ">
                <div className=" [ modal-box col-6 ] ">
                    <div className=" [ d-flex jc-end ] ">
                        <i onClick={closeModal} className=" [ fa fa-times-circle closeModal ] "></i>
                    </div>
                    <div className={success !== true ? " [ modal-box-form ] " : " [ d-none ] "}>
                        <h1 className="[ text-center ]">{establishmentName}</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className=" [ enquiry-form col-10 m-auto ] " >
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    name="establishment"
                                    value={establishmentName}
                                    ref={register({ required: true })}
                                    className=" [ form-input col-12 ] "
                                    readonly />
                            </div>

                            <label >Name</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    placeholder="clientName"
                                    name="clientName"
                                    ref={register({ required: true, maxLength: 40 })}
                                    className=" [ form-input col-12 ] " />
                            </div>
                            {errors.clientName && <p className=" [ errorMessage ] ">Name is required</p>}

                            <label >Email</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    placeholder="email"
                                    name="email"
                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                    className=" [ form-input col-12 ] " />
                            </div>
                            {errors.email && <p className=" [ errorMessage ] ">Email is incorrect</p>}

                            <div className=" [ form-input-dflex ] ">
                                <div className=" [ col-5 ] ">
                                    <label className=" [ col-12 ] ">Checkin</label>
                                    <input
                                        type="date"
                                        placeholder="Checkin"
                                        name="checkin"
                                        ref={register({ required: true })}
                                        className=" [ form-input col-12 ] " />
                                    {errors.checkin && <p className=" [ errorMessage ] ">Checkin date is required</p>}
                                </div>

                                <div className=" [ col-5 ] ">
                                    <label className=" [ col-12 ] ">Checkout</label>
                                    <input
                                        type="date"
                                        placeholder="Checkout"
                                        name="checkout"
                                        ref={register({ required: true })}
                                        className=" [ form-input col-12 ] " />
                                    {errors.checkout && <p className=" [ errorMessage ] ">Checkout date is required</p>}
                                </div>
                            </div>

                            <input
                                type="submit" className=" [ btn ] " />
                        </form>
                    </div>
                    <div className={success ? " [ modal-box-success ] " : " [ d-none ] "}>
                        <h1 className=" [ modal-box-h1 text-center ] " >Thank you for booking <br></br>{sessionEstablishment}</h1>
                        <div className=" [ col-6 m-auto ] ">
                            <p><b>Name: </b> {sessionClientName}</p>
                            <p><b>Email: </b> {sessionEmail}</p>
                            <p><b>Checkin: </b> {sessionCheckin}</p>
                            <p><b>Checkout: </b> {sessionCheckout}</p>
                            <button className=" [ btn ] " onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Modal;