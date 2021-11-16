import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CompanyBookingList } from "../../../actions/booking";
import { PopUpModal } from "../../../actions/popUpModal";

import MainLayout from "../../shared/MainLayout";
import FormatDate from "../../shared/FormatDate";
import BookingStatus from "../../shared/BookingStatus";
// import ModalDetail from "./ModalDetail";

const List = () => {
    const dispatch = useDispatch();

    const companyBookingList = useSelector((state) => state.companyBookingList);
    const { companyBooking } = companyBookingList;

    const showModalState = useSelector((state) => state.showModal);
    const { showModal } = showModalState;
    
    useEffect(() => {
        dispatch(CompanyBookingList())
    }, [dispatch]);
    
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
                                companyBooking &&
                                companyBooking.reverse().map((data) => 
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
                                            <div className="text-sm text-gray-500">{data.vendor.name}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm  text-gray-500">
                                            {
                                                !data.is_reject && 
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
                                            {/* <Link to={`/company/booking/${data._id}`} className="px-4  py-1 text-sm text-blue-600 bg-blue-200 rounded-full">View</Link> */}
                                        </td> 
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>              
            </div>

            {/* {
                showModal && 
                <ModalDetail />
            } */}
        </MainLayout>
    );
}

export default List;