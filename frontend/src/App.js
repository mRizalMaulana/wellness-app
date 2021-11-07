import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Navbar from './components/shared/Navbar';
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import Booking from './components/pages/Booking';
import VendorBooking from './components/pages/VendorBooking';
// import BookingDetail from './componets/pages/BookingDetail';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/company/booking' component={Booking}/>
            <Route exact path='/vendor/booking' component={VendorBooking}/>
            {/* <Route path="/booking/:id" component={BookingDetail} /> */}
            <Redirect to="/" /> 
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
