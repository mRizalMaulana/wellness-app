import { 
    BOOKING_STORE_REQUEST,
    BOOKING_STORE_SUCCESS,
    BOOKING_STORE_FAIL,
    COMPANY_BOOKING_LIST_REQUEST,
    COMPANY_BOOKING_LIST_SUCCESS,
    COMPANY_BOOKING_LIST_FAIL,
    BOOKING_DETAIL_REQUEST,
    BOOKING_DETAIL_SUCCESS,
    BOOKING_DETAIL_FAIL,
    VENDOR_BOOKING_LIST_REQUEST,
    VENDOR_BOOKING_LIST_SUCCESS,
    VENDOR_BOOKING_LIST_FAIL,
    BOOKING_UPDATE_REQUEST,
    BOOKING_UPDATE_SUCCESS,
    BOOKING_UPDATE_FAIL,
} from "../constants/booking"
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const StoreBooking = (event, vendor, location, proposed_date_1, proposed_date_2, proposed_date_3) => async (dispatch, getState) => {
    try {
        dispatch({ type: BOOKING_STORE_REQUEST });

        const { userLogin: { loggedInUser } } = getState();
        const baseUrl = process.env.REACT_APP_BACKEND_HOST;
        const config = { headers: { 
            "Authorization" : `Bearer ${loggedInUser.token}`,
            "Content-type"  : "application/json" 
        } };

        const company = loggedInUser.company_id;
        
        const { data } = await axios.post(`${baseUrl}/api/company/booking/create`, {
            event,
            vendor,
            company,
            location,
            proposed_date_1,
            proposed_date_2,
            proposed_date_3,
        }, config);
 
        dispatch({ type: BOOKING_STORE_SUCCESS, payload:data });
    } catch (err) {
        dispatch({
            type: BOOKING_STORE_FAIL,
            payload: 
                err.response && err.response.data.message 
                    ? err.response.data.message : err.message
        });
    }
}

export const CompanyBookingList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: COMPANY_BOOKING_LIST_REQUEST });

        const { userLogin: { loggedInUser } } = getState();
        const baseUrl = process.env.REACT_APP_BACKEND_HOST;
        const config = { headers: { 
            "Authorization" : `Bearer ${loggedInUser.token}`,
            "Content-type"  : "application/json" 
        } };
        const company = loggedInUser.company_id;
        
        const { data } = await axios.get(`${baseUrl}/api/company/booking/list/${company}`, config);
 
        dispatch({ type: COMPANY_BOOKING_LIST_SUCCESS, payload:data });
    } catch (err) {
        dispatch({
            type: COMPANY_BOOKING_LIST_FAIL,
            payload: 
                err.response && err.response.data.message 
                    ? err.response.data.message : err.message
        });
    }
}

export const BookingDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: BOOKING_DETAIL_REQUEST });

        const { userLogin: { loggedInUser } } = getState();
        const baseUrl = process.env.REACT_APP_BACKEND_HOST;
        const config = { headers: { 
            "Authorization" : `Bearer ${loggedInUser.token}`,
            "Content-type"  : "application/json" 
        } };
        
        const { data } = await axios.get(`${baseUrl}/api/company/booking/detail/${id}`, config);
 
        dispatch({ type: BOOKING_DETAIL_SUCCESS, payload:data });
    } catch (err) {
        dispatch({
            type: BOOKING_DETAIL_FAIL,
            payload: 
                err.response && err.response.data.message 
                    ? err.response.data.message : err.message
        });
    }
}

export const VendorBookingList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: VENDOR_BOOKING_LIST_REQUEST });

        const { userLogin: { loggedInUser } } = getState();
        const baseUrl = process.env.REACT_APP_BACKEND_HOST;
        const config = { headers: { 
            "Authorization" : `Bearer ${loggedInUser.token}`,
            "Content-type"  : "application/json" 
        } };
        const vendor = loggedInUser.vendor_id;
        
        const { data } = await axios.get(`${baseUrl}/api/vendor/booking/list/${vendor}`, config);
 
        dispatch({ type: VENDOR_BOOKING_LIST_SUCCESS, payload:data });
    } catch (err) {
        dispatch({
            type: VENDOR_BOOKING_LIST_FAIL,
            payload: 
                err.response && err.response.data.message 
                    ? err.response.data.message : err.message
        });
    }
}

export const UpdateBooking = (id, is_reject, reject_reason, confirmed_date) => async (dispatch, getState) => {
    try {
        dispatch({ type: BOOKING_UPDATE_REQUEST });

        const { userLogin: { loggedInUser } } = getState();
        const baseUrl = process.env.REACT_APP_BACKEND_HOST;
        const config = { headers: { 
            "Authorization" : `Bearer ${loggedInUser.token}`,
            "Content-type"  : "application/json" 
        } };
        
        const { data } = await axios.put(`${baseUrl}/api/vendor/booking/detail/${id}`, {
            is_reject,
            reject_reason,
            confirmed_date,
        }, config);
 
        dispatch({ type: BOOKING_UPDATE_SUCCESS, payload:data });
    } catch (err) {
        dispatch({
            type: BOOKING_UPDATE_FAIL,
            payload: 
                err.response && err.response.data.message 
                    ? err.response.data.message : err.message
        });
    }
}