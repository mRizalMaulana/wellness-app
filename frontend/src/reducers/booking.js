import { 
    VENDOR_LIST_REQUEST, 
    VENDOR_LIST_SUCCESS,
    VENDOR_LIST_FAIL
} from '../constants/vendor';

import { 
    EVENT_LIST_REQUEST,
    EVENT_LIST_SUCCESS,
    EVENT_LIST_FAIL
} from "../constants/event"

import { 
    BOOKING_STORE_REQUEST, 
    BOOKING_STORE_SUCCESS,
    BOOKING_STORE_FAIL,
    COMPANY_BOOKING_LIST_REQUEST,
    COMPANY_BOOKING_LIST_SUCCESS,
    COMPANY_BOOKING_LIST_FAIL
} from '../constants/booking';

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

export const eventListReducer = ( state = { event:[] }, action) => {
    switch (action.type) {
        case EVENT_LIST_REQUEST:
            return { loadingEvent: true };
        case EVENT_LIST_SUCCESS:
            return { loadingEvent: false, event: action.payload };
        case EVENT_LIST_FAIL:
            return { loadingEvent: false, errorEvent: action.payload }; 
        default:
            return state;
    }
}

export const bookingStoreReducer = ( state = {}, action) => {
    switch (action.type) {
        case BOOKING_STORE_REQUEST:
            return { loadingBookingStore: true };
        case BOOKING_STORE_SUCCESS:
            return { loadingBookingStore: false, booking: action.payload };
        case BOOKING_STORE_FAIL:
            return { loadingBookingStore: false, errorStoreBooking: action.payload }; 
        default:
            return state;
    }
}

export const bookingCompanyListReducer = ( state = { companyBooking:[] }, action) => {
    switch (action.type) {
        case COMPANY_BOOKING_LIST_REQUEST:
            return { loadingCompanyBookingList: true };
        case COMPANY_BOOKING_LIST_SUCCESS:
            return { loadingCompanyBookingList: false, companyBooking: action.payload };
        case COMPANY_BOOKING_LIST_FAIL:
            return { loadingCompanyBookingList: false, errorCompanyBooking: action.payload }; 
        default:
            return state;
    }
}