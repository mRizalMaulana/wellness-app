import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VendorUserPrivateRoute = ({ component: Component, ...rest }, getState) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { loggedInUser } = userLogin;
    let type = '';
    if (loggedInUser) {
        type = loggedInUser.type;
    }

    useEffect(() => {}, [loggedInUser]);

    return (
        <Route { ...rest} render={ props => (type !== 'vendor') ? (
            <Redirect to='/'/>
        ) : (
            <Component {...props}/>
        )}/>
    );
}

export default VendorUserPrivateRoute;