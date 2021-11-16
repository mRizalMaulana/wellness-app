import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PopUpModal, PopUpModalApprove } from "../../../actions/popUpModal";
import { UpdateBooking } from "../../../actions/booking";

import Message from '../../shared/MessageLayouts/DefaultMessage';
import FormatDate from "../../shared/FormatDate";

const ModalApproveBooking = () => {
    const [confirmed, setConfirmed] = useState('');
    const dispatch = useDispatch();

    const showModalApproveState = useSelector((state) => state.showModalApprove);
    const { approveBookingData } = showModalApproveState;

    const updateBooking = useSelector((state) => state.updateBooking);
    const {loadingBookingUpdate, errorBookingUpdate} = updateBooking;

    const newFormatDate = (date) => {
        let dateData = new Date(date);
        let dataDate = dateData.getDate();
        let dataMonth = dateData.getMonth() + 1;
        let dataYear = dateData.getFullYear();
        let newDate = dataMonth + "/" + dataDate + "/" + dataYear;
        
        return newDate;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!confirmed) return;
        
        dispatch(UpdateBooking(approveBookingData.id, false, '', confirmed));

        if (!errorBookingUpdate && !loadingBookingUpdate) {
            setConfirmed('');
            dispatch(PopUpModalApprove(false));
        } 
    }

    return (
        <Fragment>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">   
                <div className="relative w-10/12 my-6 mx-auto sm:w-10/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h4 className="text-xl font-semibold">
                                    Booking ID :
                                    <span className='block'>
                                        {approveBookingData.id}
                                    </span>
                                </h4>
                                <button className="p-1 ml-auto bg-transparent border-0  float-right text-2xl leading-none font-semibold outline-none focus:outline-none">
                                    <span className="bg-transparent text-gray-400 hover:text-black h-6 block outline-none focus:outline-none flex flex-wrap content-center"
                                    onClick={ () => { dispatch(PopUpModalApprove(false))} }> x
                                    </span>
                                </button>
                        </div>
                        {/*body*/}
                        <form onSubmit={onSubmit}>
                        <div className="relative p-6 flex-auto">
                            {
                                loadingBookingUpdate && <Fragment>Loading</Fragment>
                            }
                            {
                                errorBookingUpdate && <Message messagetype='error' message={errorBookingUpdate}/>
                            }

                            <h4>Please select the confirmed date</h4>

                            <div className="flex flex-wrap overflow-hidden -mx-2 lg:-mx-2">
                                <div className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
                                    <div className="mt-2">
                                        <label className="inline-flex items-center cursor-pointer">
                                        <input type="radio" className="
                                            rounded-full
                                            border-gray-300
                                            text-indigo-600
                                            shadow-sm
                                            focus:border-indigo-300
                                            focus:ring
                                            focus:ring-offset-0
                                            focus:ring-indigo-200
                                            focus:ring-opacity-50 cursor-pointer
                                            " name="confimed_date" value={newFormatDate(approveBookingData.proposed_date_1)} onChange={(e) => setConfirmed(e.target.value)}/>
                                        <span className="ml-2 cursor-pointer">
                                            <FormatDate date={approveBookingData.proposed_date_1}/>
                                        </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
                                    <div className="mt-2">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="radio" className="
                                                rounded-full
                                                border-gray-300
                                                text-indigo-600
                                                shadow-sm
                                                focus:border-indigo-300
                                                focus:ring
                                                focus:ring-offset-0
                                                focus:ring-indigo-200
                                                focus:ring-opacity-50 cursor-pointer
                                                " name="confimed_date" value={newFormatDate(approveBookingData.proposed_date_1)} onChange={(e) => setConfirmed(e.target.value)}/>
                                            <span className="ml-2 cursor-pointer">
                                                <FormatDate date={approveBookingData.proposed_date_2}/>
                                            </span>
                                        </label>
                                    </div>
                                </div>

                                <div className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/3">
                                    <div className="mt-2">
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="radio" className="
                                                rounded-full
                                                border-gray-300
                                                text-indigo-600
                                                shadow-sm
                                                focus:border-indigo-300
                                                focus:ring
                                                focus:ring-offset-0
                                                focus:ring-indigo-200
                                                focus:ring-opacity-50 cursor-pointer
                                                " name="confimed_date" value={newFormatDate(approveBookingData.proposed_date_1)} onChange={(e) => setConfirmed(e.target.value)}/>
                                            <span className="ml-2 cursor-pointer">
                                                <FormatDate date={approveBookingData.proposed_date_3}/>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        {/*footer*/}
                        <div className="flex items-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <div className='flex w-full'>
                                <button type='button' className='bg-red-400 mr-auto 
                                    rounded-md text-white font-bold 
                                    uppercase px-6 py-2 text-sm hover:bg-red-600'
                                    onClick={ () => { dispatch(PopUpModalApprove(false)); dispatch(PopUpModal(true, approveBookingData.id)); } } > 
                                    Cancel 
                                </button> 
                                    
                                <button type='submit' className='bg-green-400 ml-auto 
                                    rounded-md text-white font-bold 
                                    uppercase px-6 py-2 text-sm hover:bg-green-600'
                                    >
                                    Confirm 
                                </button>
                            </div>
                        </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </Fragment>
    );
}

export default ModalApproveBooking;