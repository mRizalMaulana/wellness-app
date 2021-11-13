import { 
    EVENT_LIST_REQUEST,
    EVENT_LIST_SUCCESS,
    EVENT_LIST_FAIL
} from "../constants/event"
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const EventList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: EVENT_LIST_REQUEST });

        const { userLogin: { companyUser } } = getState();
        const baseUrl = process.env.REACT_APP_BACKEND_HOST;
        const config = { headers: { 
            "Authorization" : `Bearer ${companyUser.token}`,
            "Content-type"  : "application/json" 
        } };
        
        const { data } = await axios.get(`${baseUrl}/api/event`, config);
 
        dispatch({ type: EVENT_LIST_SUCCESS, payload:data });
    } catch (err) {
        dispatch({
            type: EVENT_LIST_FAIL,
            payload: 
                err.response && err.response.data.message 
                    ? err.response.data.message : err.message
        });
    }
}