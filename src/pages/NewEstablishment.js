
import React, { useState, useEffect } from 'react';
import AdminNavbar from './../components/adminNavbar';
import { POST_NEWESTABLISHMENT, GET_ESTABLISHMENTS } from './../constants/constants';
import axios from 'axios';
import { useForm } from 'react-hook-form';


export default function ContactMessages(props) {
    const { register, handleSubmit, reset, errors } = useForm();
    const [success, setSuccess] = useState(false);
    let [lastEstablishment, setLastEstablishment] = useState("should be last number here")

    useEffect(() => {
        axios.get(GET_ESTABLISHMENTS)
            .then((result) => {
                setLastEstablishment(result.data[result.data.length - 1].id);
            })
    }, [])



    console.log(lastEstablishment, " = last establishment id");

    let lastId = ++lastEstablishment

    console.log("last id = ", lastId)

    const onSubmit = (data) => {
        // console.log(data);
        const form = new FormData()
        form.append('establishmentName', data.establishmentName)
        form.append('establishmentEmail', data.establishmentEmail);
        form.append('imageUrl', data.imageUrl);
        form.append('maxGuests', data.maxGuests);
        form.append('price', data.price);
        form.append('googleLat', data.googleLat);
        form.append('googleLong', data.googleLong);
        form.append('description', data.description);
        form.append('selfCatering', data.selfCatering);
        form.append('id', data.id);
        axios.post(POST_NEWESTABLISHMENT, form, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
            .then(data => {//success
                setSuccess("The New Establishment has been activated");
                clearForm();
            }, error => { //failed
                setSuccess("Oops.. Something went wrong. Please try again later")
            })

    }
    function clearForm() {
        setTimeout(function () {
            setSuccess(false);
            reset();
        }, 3000);
    }
    //console.log(errors);
    return (

        <>
            <AdminNavbar />
            <div className=" [ container m-auto col-6 col-t-8 col-m-11 ] ">
                <h1 className=" [ text-center ] ">New Establishment</h1>

                <form onSubmit={handleSubmit(onSubmit)} className=" [ enquiry-form col-10 m-auto ] " >

                    <div className="[ form-input-dflex ]">
                        <div className="[ col-8 col-t-12 col-m-12 ]">
                            <label >Establishment Name</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    placeholder="Establishment Name"
                                    name="establishmentName"
                                    ref={register({ required: true, maxLength: 40 })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.establishmentName && <p className=" [ errorMessage ] ">Name is required</p>}
                        </div>
                        <div className="[ col-3 col-t-12 col-m-12 ]">
                            <label >Max Guests</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="number"
                                    placeholder="Max Guests"
                                    name="maxGuests"
                                    ref={register({ required: true, maxLength: 4 })}
                                    className=" [ form-input input-padding col-12 col-t-5 col-m-6 ] " />
                            </div>
                            {errors.maxGuests && <p className=" [ errorMessage ] ">Max guests is required</p>}
                        </div>
                    </div>

                    <div className="[ form-input-dflex ]">
                        <div className="[ col-8 col-t-12 col-m-12 ]">
                            <label >Establishment Email</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    placeholder="Establishment Email"
                                    name="establishmentEmail"
                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.establishmentEmail && <p className=" [ errorMessage ] ">Email is incorrect</p>}
                        </div>
                        <div className="[ col-3 col-t-12 col-m-12 ]">
                            <label >Breakfast included?</label>
                            <div className=" [ input-container ] ">
                                <label >Yes</label>
                                <input
                                    name="selfCatering"
                                    type="radio"
                                    value="True"
                                    ref={register({ required: true })} />

                                <label >No</label>
                                <input
                                    name="selfCatering"
                                    type="radio"
                                    value="False"
                                    ref={register({ required: true })} />
                            </div>
                        </div>
                    </div>

                    <div className="[ form-input-dflex ]">
                        <div className="[ col-12 col-t-12 col-m-12 ]">
                            <label >Description</label>
                            <div className=" [ input-container ] ">
                                <textarea
                                    type="text"
                                    placeholder="description"
                                    name="description"
                                    ref={register({ required: false })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                                {errors.description && <p className=" [ errorMessage ] ">Checkin date is required</p>}

                            </div>
                        </div>
                    </div>

                    <div className="[ form-input-dflex ]">
                        <div className="[ col-4 col-t-5 col-m-12 ]">
                            <label >Latitude</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    placeholder="Latitude"
                                    name="googleLat"
                                    ref={register({ required: true })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.googleLat && <p className=" [ errorMessage ] ">Latitude is required</p>}
                        </div>
                        <div className="[ col-4 col-t-5 col-m-12 ]">
                            <label >Longitude</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="text"
                                    placeholder="Longitude"
                                    name="googleLong"
                                    ref={register({ required: true })}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />
                            </div>
                            {errors.googleLong && <p className=" [ errorMessage ] ">Longitude is required</p>}
                        </div>
                    </div>

                    <div className="[ form-input-dflex ]">
                        <div className="[ col-4 col-t-12 col-m-12 ]">
                            <label >Image (URL)</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="url"
                                    placeholder="imageUrl"
                                    name="imageUrl"
                                    ref={register}
                                    className=" [ form-input input-padding col-12 col-t-12 col-m-12 ] " />

                            </div>
                            {errors.imageUrl && <p className=" [ errorMessage ] ">Image is required</p>}
                        </div>
                        <div className="[ col-4 col-t-12 col-m-12 ]">
                            <label >Price</label>
                            <div className=" [ input-container ] ">
                                <input
                                    type="number"
                                    placeholder="price"
                                    name="price"
                                    ref={register({ required: true, min: 1, maxLength: 10 })}
                                    className=" [ form-input input-padding col-12 col-t-5 col-m-6 ] " />

                            </div>
                            {errors.price && <p className=" [ errorMessage ] ">Price is required</p>}
                        </div>
                    </div>

                    <input
                        type="number"
                        name="id"
                        value={lastId}
                        ref={register({ required: true })}
                        readOnly
                    />
                    <p className=" [ successMessage ] ">{success}</p>
                    <input
                        type="submit" disabled={success !== false} className=" [ btn ] " />
                </form>
            </div>

        </>
    );
}
