


import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Contact() {
  const { register, handleSubmit, errors } = useForm();
 

 
  const onSubmit = (data) => {
      console.log(data);
      const form = new FormData()
      form.append('clientName', data.clientName);
      form.append('email', data.email);
      form.append('message', data.message);
      axios.post('http://localhost/holidaze/contact-success.php', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
  }
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}  >
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

















