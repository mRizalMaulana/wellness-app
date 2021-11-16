import {
    SHOW_MODAL, 
    HIDE_MODAL
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