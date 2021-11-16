import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { VendorBookingList } from "../../../actions/booking";
import { PopUpModal } from "../../../actions/popUpModal";

import MainLayout from "../../shared/MainLayout";
import FormatDate from "../../shared/FormatDate";
import BookingStatus from "../../shared/BookingStatus";
import ModalDetail from "./ModalDetail";
import ModalRejectBooking from "./ModalRejectBooking";
import ModalApproveBooking from "./ModalApproveBooking";

const List = () => {
    const dispatch = useDispatch();

    const vendorBookingList = useSelector((state) => state.vendorBookingList);
    const { vendorBooking } = vendorBookingList;

    const showModalState = useSelector((state) => state.showModal);
    const { showModal } = showModalState;

    const showModalRejectState = useSelector((state) => state.showModalReject);
    const { showModalReject } = showModalRejectState;

    const showModalApproveState = useSelector((state) => state.showModalApprove);
    const { showModalApprove } = showModalApproveState;

    const updateBooking = useSelector((state) => state.updateBooking);
    const { bookingUpdate } = updateBooking;

    useEffect(() => {
        dispatch(VendorBookingList());
        if (bookingUpdate) {
            dispatch(VendorBookingList());
        }        
    }, [dispatch, bookingUpdate]);
    
    return (
        <MainLayout title="Booking">
            <div className="mt-5 p-5 bg-white rounded shadow-lg">                
                <div className="border border-gray-200 shadow mt-4 overflow-x-auto">
                    <table className="divide-y divide-gray-300 w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    ID
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Event
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Company
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Proposed Date
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Status
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Confirmed at
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Created at
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    View
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300 text-center">
                            {
                                vendorBooking &&
                                vendorBooking.map((data) => 
                                    (
                                    <tr key={data._id} className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {data._id}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                                {data.event.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">{data.company.name}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm  text-gray-500">
                                            {
                                                !data.confirmed_date && 
                                                    <div>
                                                        <div><FormatDate date={data.proposed_date_1}/></div>
                                                        <div><FormatDate date={data.proposed_date_2}/></div>
                                                        <div><FormatDate date={data.proposed_date_3}/></div>
                                                    </div>
                                            }
                                        </td>
                                        <td className="px-6 py-4 text-sm  text-gray-500">
                                            <BookingStatus isRejected={data.is_reject} isConfirmed={data.confirmed_date}/>
                                        </td>
                                        <td className="px-6 py-4 text-sm  text-gray-500">
                                            {
                                                !!data.confirmed_date ? <FormatDate date={data.confirmed_date}/> : '-'
                                            }
                                        </td>
                                        <td className="px-6 py-4 text-sm  text-gray-500">
                                            <FormatDate date={data.createdAt}/>
                                        </td>
                                        <td className="px-6 py-4 ">
                                            <button onClick={ () => { dispatch(PopUpModal(true, data._id))} } className='px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full'> View </button>
                                        </td> 
                                    </tr>
                                )).reverse()
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {
                showModal && 
                <ModalDetail />
            }

            {
                showModalReject && 
                <ModalRejectBooking />
            }

            {
                showModalApprove && 
                <ModalApproveBooking />
            }
            
        </MainLayout>
    );
}

export default List;