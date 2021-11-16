import { 
    VENDOR_LIST_REQUEST, 
    VENDOR_LIST_SUCCESS, 
    VENDOR_LIST_FAIL 
} from "../constants/vendor"
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const VendorList = () => async (dispatch, getState) => {
    try {
        dispatch({ type: VENDOR_LIST_REQUEST });

        const { userLogin: { loggedInUser } } = getState();
        const baseUrl = process.env.REACT_APP_BACKEND_HOST;
        const config = { headers: { 
            "Authorization" : `Bearer ${loggedInUser.token}`,
            "Content-type"  : "application/json" 
        } };
        
        const { data } = await axios.get(`${baseUrl}/api/vendor`, config);
 
        dispatch({ type: VENDOR_LIST_SUCCESS, payload:data });
    } catch (err) {
        dispatch({
            type: VENDOR_LIST_FAIL,
            payload: 
                err.response && err.response.data.message 
                    ? err.response.data.message : err.message
        });
    }
}