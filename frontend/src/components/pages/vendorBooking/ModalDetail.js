import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PopUpModal, PopUpModalReject, PopUpModalApprove } from "../../../actions/popUpModal";
import { BookingDetail } from "../../../actions/booking";


import FormatDate from "../../shared/FormatDate";
import BookingStatus from "../../shared/BookingStatus";

const ModalDetail = () => {   
    const dispatch = useDispatch();

    const showModalState = useSelector((state) => state.showModal);
    const { showModal, bookingId } = showModalState;

    const bookingDetail = useSelector((state) => state.bookingDetail);
    const { loadingBookingDetail, booking, errorBookingDetail } = bookingDetail;

    const showModalRejectState = useSelector((state) => state.showModalReject);
    const { showModalReject, rejectBookingId } = showModalRejectState;

    useEffect(() => {
        if (showModal) {
            dispatch(BookingDetail(bookingId));
        }
    }, []);

    return (
        <Fragment>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">   
                <div className="relative w-10/12 my-6 mx-auto sm:w-10/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            {   booking && 
                                <h4 className="text-xl font-semibold">
                                    Booking ID :
                                    <span className='block'>
                                        {booking._id}
                                    </span>
                                </h4>
                            }

                            {
                                !loadingBookingDetail &&
                                <button className="p-1 ml-auto bg-transparent border-0  float-right text-2xl leading-none font-semibold outline-none focus:outline-none">
                                    <span className="bg-transparent text-gray-400 hover:text-black h-6 block outline-none focus:outline-none flex flex-wrap content-center"
                                    onClick={ () => { dispatch(PopUpModal(false))} }> x
                                    </span>
                                </button>
                            }
                            
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        {   
                            loadingBookingDetail && 
                            <div className='text-center text-xl'>
                                <i className="fa fa-spinner animate-spin mr-2" aria-hidden="true"></i> Loading...
                            </div>
                        }
                        {
                            errorBookingDetail && 
                            <div className='text-center text-red-500 font-bold text-xl'>
                                {errorBookingDetail}
                            </div>
                        }
                        {
                            booking &&
                            <div className="grid grid-cols-2">
                                <div className='flex flex-wrap justify-center content-center'>
                                    <div className='w-11/12'>

                                        <div className='mt-2'>
                                            <label className='block'>
                                                <span className='text-gray-700'>Event</span>
                                                <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                                    {booking.event.name}
                                                </div>
                                            </label>
                                        </div>

                                        <div className='mt-2'>
                                            <label className='block'>
                                                <span className='text-gray-700'>Company</span>
                                                <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                                    {booking.company.name}
                                                </div>
                                            </label>
                                        </div>
                                
                                        <div className='mt-2'>
                                            <label className="block">
                                                <span className="text-gray-700">Address Location</span>
                                                <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                                    {booking.location}
                                                </div>
                                            </label>
                                        </div>

                                        <div className='mt-2'>
                                            <label className="block">
                                                <span className="text-gray-700">Status</span>
                                                <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                                    <BookingStatus isRejected={booking.is_reject} isConfirmed={booking.confirmed_date}/>
                                                </div>
                                            </label>
                                        </div>

                                    </div>
                                </div>

                                <div className='flex flex-wrap justify-center content-center'>
                                    <div className='w-11/12'>
                                        {
                                            !booking.is_reject && 
                                                <Fragment>
                                                    <div className='mt-2'>
                                                        <label className="block">
                                                            <span className="text-gray-700">Proposed Date 1</span>
                                                            <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                                                <FormatDate date={booking.proposed_date_1} />
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <label className="block">
                                                            <span className="text-gray-700">Proposed Date 2</span>
                                                            <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                                                <FormatDate date={booking.proposed_date_2} />
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <label className="block">
                                                            <span className="text-gray-700">Proposed Date 3</span>
                                                            <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                                                <FormatDate date={booking.proposed_date_3} />
                                                            </div>
                                                        </label>
                                                    </div>
                                                </Fragment>
                                        }

                                        {
                                            !!booking.reject_reason && 
                                                <div className='mt-2'>
                                                    <label className="block">
                                                        <span className="text-gray-700">Proposed Date 3</span>
                                                        <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                                            {booking.reject_reason}
                                                        </div>
                                                    </label>
                                                </div>
                                        }

                                        {
                                            !!booking.confirmed_date && 
                                                <div className='mt-2'>
                                                    <label className="block">
                                                        <span className="text-gray-700">Proposed Date 3</span>
                                                        <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                                            <FormatDate date={booking.confirmed_date} /> 
                                                        </div>
                                                    </label>
                                                </div>
                                        }

                                        <div className='mt-2'>
                                            <label className="block">
                                                <span className="text-gray-700">Created at</span>
                                                <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                                    <FormatDate date={booking.createdAt} />
                                                </div>
                                            </label>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        }

                  </div>
                  {/*footer*/}
                    <div className="flex items-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                        {
                            booking && (!booking.is_reject && !booking.confirmed_date) ?
                                <div className='flex w-full'>
                                    <button className='bg-red-400 mr-auto 
                                        rounded-md text-white font-bold 
                                        uppercase px-6 py-2 text-sm hover:bg-red-600'
                                        onClick={ () => { dispatch(PopUpModal(false)); dispatch(PopUpModalReject(true, booking._id)); } }> 
                                        Reject 
                                    </button> 
                                    
                                    <button className='bg-green-400 ml-auto 
                                        rounded-md text-white font-bold 
                                        uppercase px-6 py-2 text-sm hover:bg-green-600'
                                        onClick={ () => { dispatch(PopUpModal(false)); dispatch(PopUpModalApprove(true, booking._id, booking.proposed_date_1, booking.proposed_date_2, booking.proposed_date_3)) } }>
                                        Approve 
                                    </button>
                                </div>
                            : 

                            !loadingBookingDetail && 
                                <div className='flex w-full'>
                                    <button onClick={ () => { dispatch(PopUpModal(false))} } className='bg-blue-400 ml-auto 
                                        rounded-md text-white font-bold 
                                        uppercase px-6 py-2 text-sm hover:bg-blue-600'>
                                        Close
                                    </button>
                                </div>
                        }
                    </div>
                  
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </Fragment>
    );
}

export default ModalDetail;