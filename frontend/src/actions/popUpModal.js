import { 
    SHOW_MODAL,
    HIDE_MODAL
} from "../constants/popUpModal"

export const PopUpModal = (isShow, id) => async (dispatch) => {
    isShow ? dispatch({ type: SHOW_MODAL, payload: id }) : dispatch({ type: HIDE_MODAL });
}