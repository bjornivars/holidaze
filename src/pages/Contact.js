


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Navbar from './../components/navbar';
import Footer from './../components/footer';



export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState(false)


  const onSubmit = (data) => {
    // console.log(data);
    const form = new FormData()
    form.append('clientName', data.clientName);
    form.append('email', data.email);
    form.append('message', data.message);
    axios.post('http://localhost/holidaze/contact-success.php', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(data => {//success
        setSuccess("Thank you for sending us a message! We will reach out to you soon.")
      }, error => { //failed
        setSuccess("Oops.. Something went wrong. Please try again later")
      })

  }
  console.log(errors);

  return (
    <>
      <Navbar />
      <div className=" [ container ] ">
        <h1 className=" [ text-center ] ">Contact us</h1>
        <div className=" [ col-4 col-t-6 m-auto ] ">
          <form onSubmit={handleSubmit(onSubmit)}  >
            <label >Name</label>
            <div className=" [ input-container ] ">
              <i className="fa fa-user form-input-icon"></i>
              <input
                type="text"
                placeholder="Emter your name"
                name="clientName"
                ref={register({ required: true, maxLength: 40 })}
                className=" [ form-input form-input-contact col-12 col-t-12 input-padding ] "
              />
            </div>
            {errors.clientName && <p className=" [ errorMessage ] ">Name is required</p>}
            <label >Email</label>
            <div className=" [ input-container ] ">
              <i className="fa fa-envelope form-input-icon"></i>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                className=" [ form-input form-input-contact col-12 col-t-12 input-padding ] "
              />
            </div>
            {errors.email && <p className=" [ errorMessage ] ">Email is incorrect</p>}
            <label >Message</label>
            <div className=" [ input-container ] ">

              <i className="fa fa-comment form-input-icon form-input-icon-comment"></i>
              <textarea
                name="message"
                placeholder="Enter Message"
                ref={register({ required: true, maxLength: 800 })}
                className=" [  form-input form-input-contact col-12 col-t-12 input-padding ] "
              />
            </div>
            {errors.message && <p className=" [ errorMessage ] ">Message is required</p>}

            <p className=" [ successMessage ] ">{success}</p>
            <input type="submit" className=" [ btn ] " />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}















/* import React from 'react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();


  const onSubmit = (data) => {
      console.log(data);

      axios.post("http://localhost/holidaze/contact-success.php", data)
      .then(
        (data) => {
          console.log(data.data);
        }
      )
      .catch(
        ( error) => {
          console.log('error', data);
        })
    }
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
      type="text"
      placeholder="clientName"
      name="clientName"
      ref={register({required: true, maxLength: 40})}
      />
    {errors.clientName && <p>Name is required</p>}

      <input
      type="text"
      placeholder="email"
      name="email"
      ref={register({required: true, pattern: /^\S+@\S+$/i})}
      />
    {errors.email && <p>Email is required</p>}

      <textarea
      name="message"
      ref={register}
      />
    {errors.message && <p>Message is required</p>}

      <input type="submit" />
    </form>
  );
}
 */

















