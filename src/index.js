import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './pages/Home';
import AllHotels from './pages/AllHotels';
import HotelSpecific from './pages/HotelSpecific';
import Contact from './pages/Contact';

import AdminHome from './pages/AdminHome';
import Enquiries from './pages/Enquiries';
import ContactMessages from './pages/ContactMessages';
import NewEstablishment from './pages/NewEstablishment';


import ScrollToTop from './components/scrollToTop';





ReactDOM.render(
  <Router>
    <App>
      <ScrollToTop /> 
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/allHotels' exact component={AllHotels} />
        <Route path='/hotelSpecific/:id/' exact component={HotelSpecific} /> }
        <Route path='/contact' exact component={Contact} />

        <Route path='/adminHome' exact component={AdminHome} />
        <Route path='/enquiries' exact component={Enquiries} />
        <Route path='/contactMessages' exact component={ContactMessages} />
        <Route path='/newEstablishment' exact component={NewEstablishment} />



        {/* <Route path='/cv' exact component={Cv} />

        <Route path='/about' exact component={About} />
        
       */}</Switch>



    </App>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
