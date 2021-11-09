import { useEffect, useState } from "react";
import MainLayout from "../../shared/MainLayout";
import { Link } from "react-router-dom";
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const List = () => {
    const [booking, setBooking] = useState([]);
    const baseUrl = process.env.REACT_APP_BACKEND_HOST;
    
    const fetchBooking = async () => {
        const {data} = await axios.get(baseUrl+'/api/booking');
        setBooking(data);
    }

    useEffect(() => {
        fetchBooking();
    }, [])

    return (
        <MainLayout title="Booking">
            <div className="mt-5 p-5 bg-white rounded shadow-lg">
                <div className="flex">
                    <Link to='/booking/create' className="rounded py-2 ml-auto px-4 bg-gradient-to-r from-green-300 to-blue-400 hover:from-blue-400 hover:to-green-300 hover:text-white"> Create New </Link>
                </div>
                
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
                                    Vendor
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Confirmed at
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Status
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Created at
                                </th>
                                <th className="px-6 py-2 text-xs text-gray-500">
                                    Detail
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300 text-center">
                            {
                                booking.map((data) => (
                                    <tr key={data._id} className="whitespace-nowrap">
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {data._id}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900">
                                                {data.event}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-500">{data.vendor}</div>
                                        </td>
                                        <td className="px-6 py-4 text-sm  text-gray-500">
                                            {data.confirm_at}
                                        </td>
                                        <td className="px-6 py-4 text-sm  text-gray-500">
                                            {data.status}
                                        </td>
                                        <td className="px-6 py-4 text-sm  text-gray-500">
                                            {data.created_at}
                                        </td>
                                        <td className="px-6 py-4 ">
                                            <Link to={`/booking/${data._id}`} className="px-4  py-1 text-sm text-blue-600 bg-blue-200 rounded-full">See Detail</Link>
                                        </td> 
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>              
            </div>
        </MainLayout>
    );
}

export default List;