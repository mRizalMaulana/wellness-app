import { 
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT 
} from "../constants/user"
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const companyUserLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const baseUrl = process.env.REACT_APP_BACKEND_HOST;
        const config = {
            headers: {
                "Content-type" : "application/json"
            }
        };

        const {data} = await axios.post(`${baseUrl}/api/company-user/login`, {
            email,
            password
        }, config);

        dispatch({ type: USER_LOGIN_SUCCESS, payload:data });
        localStorage.setItem('companyUser',JSON.stringify(data));
    } catch (err) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: 
                err.response && err.response.data.message 
                    ? err.response.data.message : err.message
        });
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('companyUser');
    dispatch({ type: USER_LOGOUT });
}