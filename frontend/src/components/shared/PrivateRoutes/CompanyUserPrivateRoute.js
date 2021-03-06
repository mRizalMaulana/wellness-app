import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CompanyUserPrivateRoute = ({ component: Component, ...rest }, getState) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { loggedInUser } = userLogin;
    let type = '';
    if (loggedInUser) {
        type = loggedInUser.type;
    }

    useEffect(() => {}, [loggedInUser]);

    return (
        <Route { ...rest} render={ props => (type !== 'company') ? (
            <Redirect to='/'/>
        ) : (
            <Component {...props}/>
        )}/>
    );
}

export default CompanyUserPrivateRoute;