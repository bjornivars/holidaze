
import React, { useState, useEffect } from 'react';
import AdminNavbar from './../components/adminNavbar';
import { POST_NEWESTABLISHMENT } from './../constants/constants';
import axios from 'axios';
import { useForm } from 'react-hook-form';


export default function ContactMessages(props) {
    const { register, handleSubmit, errors } = useForm();
    const [success, setSuccess] = useState(false)

    const onSubmit = (data) => {
        // console.log(data);
        const form = new FormData()
        form.append('establishmentName', data.establishmentName)
        form.append('establishmentEmail', data.establishmentEmail);
        form.append('checkin', data.checkin);
        form.append('checkout', data.checkout);
        form.append('notes', data.notes);


        /*         sessionStorage.setItem('establishment', data.establishment);
                sessionStorage.setItem('clientName', data.clientName);
                sessionStorage.setItem('email', data.email);
                sessionStorage.setItem('checkin', data.checkin);
                sessionStorage.setItem('checkout', data.checkout);
                sessionStorage.setItem('notes', data.notes); */
        axios.post(POST_NEWESTABLISHMENT, form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(data => {//success
                setSuccess(true)
            }, error => { //failed
                setSuccess("Oops.. Something went wrong. Please try again later")
            })

    }
    console.log(errors);
    /*  let sessionEstablishmentName = sessionStorage.getItem('establishmentName');
     let sessionClientName = sessionStorage.getItem('clientName')
     let sessionEmail = sessionStorage.getItem('email')
     let sessionCheckin = sessionStorage.getItem('checkin')
     let sessionCheckout = sessionStorage.getItem('checkout')
     let sessionNotes = sessionStorage.getItem('notes') */

    return (
        /*       {
                "establishmentName": "Sunsssset Beach",
                "establishmentEmail": "info@sunsetbeach.com",
                "imageUrl": "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
                "price": "85",
                "maxGuests": "18",
                "googleLat": "60.393388",
                "googleLong": "5.228720",
                "description": "Get ready for some amazing sunsets as you sip a cocktail and watch dolphins play in the harbour below.",
                "selfCatering": "true",
                "id": "1"
            }
             */
        <>
            <AdminNavbar />
            <div className=" [ container m-auto col-6 ] ">
                <h1 className=" [ text-center ] ">New Establishment</h1>

                <form onSubmit={handleSubmit(onSubmit)} className=" [ enquiry-form col-10 m-auto ] " >






                    <div className="[ form-input-dflex ]">
                        <div className="[ col-8 ]">
                            <label >Establishment Name</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    placeholder="Establishment Name"
                                    name="establishmentName"
                                    ref={register({ required: true, maxLength: 40 })}
                                    className=" [ form-input col-12 ] " />
                            </div>
                            {errors.establishmentName && <p className=" [ errorMessage ] ">Name is required</p>}
                        </div>
                        <div className="[ col-3 ]">
                            <label >Max Guests</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="number"
                                    placeholder="Max Guests"
                                    name="maxGuests"
                                    ref={register({ required: true, maxLength: 40 })}
                                    className=" [ form-input col-12 ] " />
                            </div>
                            {errors.maxGuests && <p className=" [ errorMessage ] ">Max guests is required</p>}
                        </div>
                    </div>



                    <div className="[ form-input-dflex ]">
                        <div className="[ col-8 ]">
                            <label >Establishment Email</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    placeholder="Establishment Email"
                                    name="establishmentEmail"
                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                    className=" [ form-input col-12 ] " />
                            </div>
                            {errors.establishmentEmail && <p className=" [ errorMessage ] ">Email is incorrect</p>}
                        </div>
                        <div className="[ col-3 ]">
                            <label >Breakfast included?</label>
                            <div className=" [ input-container ] ">
                                <input
                                    name="selfCatering"
                                    type="radio"
                                    value="Yes"
                                    ref={register({ required: true })} />

                                <input
                                    name="selfCatering"
                                    type="radio"
                                    value="No"
                                    ref={register({ required: true })} />
                            </div>
                        </div>
                    </div>



                    <div className="[ form-input-dflex ]">
                        <div className="[ col-12 ]">
                            <label >Description</label>
                            <div className=" [ input-container ] ">
                                <textarea
                                    type="text"
                                    placeholder="description"
                                    name="description"
                                    ref={register({ required: false })}
                                    className=" [ form-input col-12 ] " />
                                {errors.description && <p className=" [ errorMessage ] ">Checkin date is required</p>}

                            </div>
                        </div>
                    </div>



                    <div className="[ form-input-dflex ]">
                        <div className="[ col-4 ]">
                            <label >Latitude</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    placeholder="Latitude"
                                    name="googleLat"
                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                    className=" [ form-input col-12 ] " />
                            </div>
                            {errors.googleLat && <p className=" [ errorMessage ] ">Latitude is required</p>}
                        </div>
                        <div className="[ col-4 ]">
                            <label >Longitude</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    placeholder="Longitude"
                                    name="googleLong"
                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                    className=" [ form-input col-12 ] " />
                            </div>
                            {errors.googleLong && <p className=" [ errorMessage ] ">Longitude is required</p>}
                       
                        </div>
                    </div>



                    <input
                        type="submit" className=" [ btn ] " />
                </form>
            </div>

        </>
    );
}