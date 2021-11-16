import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PopUpModal, PopUpModalReject } from "../../../actions/popUpModal";
import { UpdateBooking } from "../../../actions/booking";

import Message from '../../shared/MessageLayouts/DefaultMessage';

const ModalRejectBooking = () => {
    const [rejectReason, setRejectReason] = useState('');
    const dispatch = useDispatch();

    const showModalRejectState = useSelector((state) => state.showModalReject);
    const { rejectBookingId } = showModalRejectState;

    const updateBooking = useSelector((state) => state.updateBooking);
    const {loadingBookingUpdate, errorBookingUpdate} = updateBooking;

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(UpdateBooking(rejectBookingId, true, rejectReason, ''));

        if (!errorBookingUpdate && !loadingBookingUpdate) {
            setRejectReason('');
            dispatch(PopUpModalReject(false));
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
                                        {rejectBookingId}
                                    </span>
                                </h4>
                                <button className="p-1 ml-auto bg-transparent border-0  float-right text-2xl leading-none font-semibold outline-none focus:outline-none">
                                    <span className="bg-transparent text-gray-400 hover:text-black h-6 block outline-none focus:outline-none flex flex-wrap content-center"
                                    onClick={ () => { dispatch(PopUpModalReject(false))} }> x
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

                            <h4>Please input the reject reason</h4>

                            <div className='mt-2'>
                                <label className="block">
                                    <span className="text-gray-700">Reason <span className='text-sm italic text-red-600'>*required</span></span>
                                    <textarea name="location" className="
                                        mt-1
                                        block
                                        w-full
                                        rounded-md
                                        border-gray-300
                                        shadow-sm
                                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    " rows="3" required={true}
                                    value={rejectReason} onChange={(e) => setRejectReason(e.target.value)}></textarea>
                                </label>
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <div className='flex w-full'>
                                <button type='button' className='bg-red-400 mr-auto 
                                    rounded-md text-white font-bold 
                                    uppercase px-6 py-2 text-sm hover:bg-red-600'
                                    onClick={ () => { dispatch(PopUpModalReject(false)); dispatch(PopUpModal(true, rejectBookingId)); } } > 
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

export default ModalRejectBooking;