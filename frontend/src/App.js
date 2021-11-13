import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Navbar from './components/shared/Navbar';
import LandingPage from './components/pages/LandingPage';
import Login from './components/pages/Login';
import CompanyBooking from './components/pages/companyBooking/List';
import CompanyBookingCreate from './components/pages/companyBooking/Create';
import CompanyBookingDetail from './components/pages/companyBooking/Detail';
import VendorBooking from './components/pages/vendorBooking/List';
import PrivateRoute from './components/shared/PrivateRoute';
import CompanyUserPrivateRoute from './components/shared/PrivateRoutes/CompanyUserPrivateRoute';

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
            <PrivateRoute exact path='/company/booking' component={CompanyBooking}/>
            <PrivateRoute exact path='/company/booking/:id' component={CompanyBookingDetail}/>
            <CompanyUserPrivateRoute exact path='/company/create/booking' component={CompanyBookingCreate}/>
            <PrivateRoute exact path='/vendor/booking' component={VendorBooking}/>
            {/* <Route path="/booking/:id" component={BookingDetail} /> */}
            <Redirect to="/" /> 
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
