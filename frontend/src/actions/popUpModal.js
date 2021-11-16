import { 
    SHOW_MODAL,
    HIDE_MODAL,
    SHOW_MODAL_REJECT,
    HIDE_MODAL_REJECT,
    SHOW_MODAL_APPROVE,
    HIDE_MODAL_APPROVE
} from "../constants/popUpModal"

export const PopUpModal = (isShow, id) => async (dispatch) => {
    isShow ? dispatch({ type: SHOW_MODAL, payload: id }) : dispatch({ type: HIDE_MODAL });
}

export const PopUpModalReject = (isShow, id) => async (dispatch) => {
    isShow ? dispatch({ type: SHOW_MODAL_REJECT, payload: id }) : dispatch({ type: HIDE_MODAL_REJECT });
}

export const PopUpModalApprove = (isShow, id, proposed_date_1, proposed_date_2, proposed_date_3) => async (dispatch) => {
    const data = {
        id, proposed_date_1, proposed_date_2, proposed_date_3 
    }
    isShow ? dispatch({ type: SHOW_MODAL_APPROVE, payload: data }) : dispatch({ type: HIDE_MODAL_APPROVE });
}