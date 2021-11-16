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
    COMPANY_BOOKING_LIST_FAIL,
    BOOKING_DETAIL_REQUEST,
    BOOKING_DETAIL_SUCCESS,
    BOOKING_DETAIL_FAIL,
    VENDOR_BOOKING_LIST_REQUEST,
    VENDOR_BOOKING_LIST_SUCCESS,
    VENDOR_BOOKING_LIST_FAIL,
    BOOKING_UPDATE_REQUEST,
    BOOKING_UPDATE_SUCCESS,
    BOOKING_UPDATE_FAIL
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

export const bookingDetailReducer = ( state = {}, action) => {
    switch (action.type) {
        case BOOKING_DETAIL_REQUEST:
            return { loadingBookingDetail: true };
        case BOOKING_DETAIL_SUCCESS:
            return { loadingBookingDetail: false, booking: action.payload };
        case BOOKING_DETAIL_FAIL:
            return { loadingBookingDetail: false, errorBookingDetail: action.payload }; 
        default:
            return state;
    }
}

export const bookingVendorListReducer = ( state = { vendorBooking:[] }, action) => {
    switch (action.type) {
        case VENDOR_BOOKING_LIST_REQUEST:
            return { loadingVendorBookingList: true };
        case VENDOR_BOOKING_LIST_SUCCESS:
            return { loadingVendorBookingList: false, vendorBooking: action.payload };
        case VENDOR_BOOKING_LIST_FAIL:
            return { loadingVendorBookingList: false, errorVendorBookingList: action.payload }; 
        default:
            return state;
    }
}

export const bookingUpdateReducer = ( state = {}, action) => {
    switch (action.type) {
        case BOOKING_UPDATE_REQUEST:
            return { loadingBookingUpdate: true };
        case BOOKING_UPDATE_SUCCESS:
            return { loadingBookingUpdate: false, bookingUpdate: action.payload };
        case BOOKING_UPDATE_FAIL:
            return { loadingBookingUpdate: false, errorBookingUpdate: action.payload }; 
        default:
            return state;
    }
}
