import React from 'react';
import './scss/styles.scss';/* 
import Navbar from './components/navbar';
import Footer from './components/footer'; */

export default function App(props) {

  return (
    <div className='App'>
     {/*  <Navbar /> */} 
        {props.children}
      {/*  <Footer />  */}
    </div>
  )

}