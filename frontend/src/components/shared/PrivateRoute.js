import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, companyUser} = userLogin;

    useEffect(() => {}, [companyUser]);
    return (
        <Route { ...rest} render={ props => !companyUser && !loading && !error? (
            <Redirect to='/login'/>
        ) : (
            <Component {...props}/>
        )}/>
    );
}

export default PrivateRoute;

 /* <Route
    {...rest}
    render={props => (
      authed
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  /> */