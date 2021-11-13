import { 
    VENDOR_LIST_REQUEST, 
    VENDOR_LIST_SUCCESS,
    VENDOR_LIST_FAIL
} from '../constants/vendor';

export const vendorListReducer = ( state = { vendor:[] }, action) => {
    switch (action.type) {
        case VENDOR_LIST_REQUEST:
            return { loading: true };
        case VENDOR_LIST_SUCCESS:
            return { loading: false, vendor: action.payload };
        case VENDOR_LIST_FAIL:
            return {loading: false, error: action.payload }; 
        default:
            return state;
    }
}