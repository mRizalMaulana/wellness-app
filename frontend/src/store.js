import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer, vendorUserLoginReducer } from './reducers/user';
import { 
    vendorListReducer, 
    eventListReducer, 
    bookingStoreReducer, 
    bookingCompanyListReducer,
    bookingDetailReducer
} from './reducers/booking';
import { popUpModalReducer } from './reducers/popUpModal';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    vendorList: vendorListReducer,
    eventList: eventListReducer,
    storeBooking: bookingStoreReducer,
    companyBookingList: bookingCompanyListReducer,
    bookingDetail: bookingDetailReducer,
    showModal: popUpModalReducer
});

const companyUserFromStorage = localStorage.getItem('companyUser') ? JSON.parse(localStorage.getItem('companyUser')) : null;
const vendorUserFromStorage = localStorage.getItem('vendorUser') ? JSON.parse(localStorage.getItem('vendorUser')) : null;

const initialState = {
    userLogin: {
        loggedInUser : companyUserFromStorage || vendorUserFromStorage
    }
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;