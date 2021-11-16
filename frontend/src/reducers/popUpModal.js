import {
    SHOW_MODAL, 
    HIDE_MODAL,
    SHOW_MODAL_REJECT,
    HIDE_MODAL_REJECT,
    SHOW_MODAL_APPROVE,
    HIDE_MODAL_APPROVE
} from '../constants/popUpModal';

export const popUpModalReducer = ( state = {}, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return { showModal: true, bookingId: action.payload };
        case HIDE_MODAL:
            return { showModal: false };
            
        default:
            return state;
    }
}

export const popUpModalRejectReducer = ( state = {}, action) => {
    switch (action.type) {
        case SHOW_MODAL_REJECT:
            return { showModalReject: true, rejectBookingId: action.payload };
        case HIDE_MODAL_REJECT:
            return { showModalRejct: false };
            
        default:
            return state;
    }
}

export const popUpModalApproveReducer = ( state = {}, action) => {
    switch (action.type) {
        case SHOW_MODAL_APPROVE:
            return { showModalApprove: true, approveBookingData: action.payload };
        case HIDE_MODAL_APPROVE:
            return { showModalApprove: false };
            
        default:
            return state;
    }
}