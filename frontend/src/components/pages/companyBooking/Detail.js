import { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { BookingDetail } from "../../../actions/booking"; 

import MainLayout from "../../shared/MainLayout";
import FormatDate from "../../shared/FormatDate";
import BookingStatus from "../../shared/BookingStatus";

const Detail = ({match}) => {
    const dispatch = useDispatch();
    const id = match.params.id;

    const bookingDetail = useSelector((state) => state.bookingDetail);
    const { booking } = bookingDetail;
    
    useEffect(() => {
        dispatch(BookingDetail(id));
    }, []);

    return (
        <MainLayout title="Detail">
            <div className="mt-5 p-5 bg-white rounded shadow-lg">
                <div className="flex">
                    <Link to='/company/booking' className="rounded py-2 ml-auto px-4 bg-gradient-to-r from-green-300 to-blue-400 hover:from-blue-400 hover:to-green-300 hover:text-white"> Back </Link>
                </div>
                {
                    booking && 
                    <Fragment>
                        <div className="grid grid-cols-2">
                        <div className='flex flex-wrap justify-center content-center'>
                            <div className='w-11/12'>
                                <div className='mt-2'>
                                    <label className='block'>
                                        <span className='text-gray-700'>Booking ID</span>
                                        <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                            {booking._id}
                                        </div>
                                    </label>
                                </div>

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
                                        <span className='text-gray-700'>Vendor</span>
                                        <div className='mt-1 py-2 pl-4 border border-gray-300 rounded-md'>
                                            {booking.vendor.name}
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
                                                    {booking.confirmed_date}
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
                    </Fragment>
                }
                           
            </div>
        </MainLayout>
    );
}

export default Detail;