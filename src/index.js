import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './pages/Home';
import AllHotels from './pages/AllHotels';
import HotelSpecific from './pages/HotelSpecific';

ReactDOM.render(
  <Router>
    <App>
      {/* <ScrollToTop /> */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/allHotels' exact component={AllHotels} />
        <Route path='/hotelSpecific/:id/' exact component={HotelSpecific} /> }

        {/* <Route path='/cv' exact component={Cv} />
        <Route path='/contact' exact component={Contact} />
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
