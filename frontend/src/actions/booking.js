import { 
    BOOKING_STORE_REQUEST,
    BOOKING_STORE_SUCCESS,
    BOOKING_STORE_FAIL,
    COMPANY_BOOKING_LIST_REQUEST,
    COMPANY_BOOKING_LIST_SUCCESS,
    COMPANY_BOOKING_LIST_FAIL
} from "../constants/booking"
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const StoreBooking = (event, vendor, company, location, proposed_date_1, proposed_date_2, proposed_date_3) => async (dispatch, getState) => {
    try {
        dispatch({ type: BOOKING_STORE_REQUEST });

        const { userLogin: { companyUser } } = getState();
        const baseUrl = process.env.REACT_APP_BACKEND_HOST;
        const config = { headers: { 
            "Authorization" : `Bearer ${companyUser.token}`,
            "Content-type"  : "application/json" 
        } };
        
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

        const { userLogin: { companyUser } } = getState();
        const baseUrl = process.env.REACT_APP_BACKEND_HOST;
        const config = { headers: { 
            "Authorization" : `Bearer ${companyUser.token}`,
            "Content-type"  : "application/json" 
        } };
        const company = companyUser.company_id;
        
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