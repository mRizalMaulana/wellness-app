import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { VendorList } from '../../../actions/vendor';
import { EventList } from "../../../actions/event";
import { StoreBooking } from "../../../actions/booking"; 

import MainLayout from "../../shared/MainLayout";

const Create = ({history}) => {
    const [paramEvent, setParamEvent] = useState('');
    const [paramVendor, setParamVendor] = useState('');
    const [paramDate1, setParamDate1] = useState('');
    const [paramDate2, setParamDate2] = useState('');
    const [paramDate3, setParamDate3] = useState('');
    const [paramLocation, setParamLocation] = useState('');

    const dispatch = useDispatch();

    const vendorList = useSelector((state) => state.vendorList);
    const { loading, vendor, error } = vendorList;

    const eventList = useSelector((state) => state.eventList);
    const { loadingEvent, event, errorEvent } = eventList;

    let vendorOptions = [];
    if (!loading && !error) {
        vendorOptions = vendor.map((e)=>{
            return { value: e._id, label: e.name }
           });
    }

    let eventOptions = [];
    if (!loadingEvent && !errorEvent) {
        eventOptions = event.map((e)=>{
            return { value: e._id, label: e.name }
           });
    }

    const userLogin = useSelector(state => state.userLogin);   
    const { companyUser } = userLogin;
    let company_id = '';
    if (companyUser) {
        company_id = companyUser.company_id
    }

    useEffect(() => {
        dispatch(VendorList())
        dispatch(EventList())

    }, [dispatch]);

    const reset = () => {
        setParamEvent('');
        setParamVendor('');
        setParamDate1('');
        setParamDate2('');
        setParamDate3('');
        setParamLocation('');
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch(StoreBooking(
            paramEvent, 
            paramVendor, 
            company_id, 
            paramLocation,
            paramDate1,
            paramDate2,
            paramDate3
        ));

        reset();
        history.push('/company/booking');
    }

    return (
        <MainLayout title="Create Booking">
            <div className="mt-5 p-5 bg-white rounded shadow-lg">
                <div className="flex">
                    <Link to='/company/booking' className="rounded py-2 ml-auto px-6 bg-gradient-to-r from-green-300 to-blue-400 hover:from-blue-400 hover:to-green-300 hover:text-white"> Cancel </Link>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-2">
                        <div className='flex flex-wrap justify-center content-center'>
                            <div className='w-11/12'>
                                <div className='mt-2'>
                                    <label className='block'>
                                        <span className='text-gray-700'>Event</span>
                                        <select name='event' className='mt-1 block w-full rounded-md
                                            border-gray-300 shadow-sm focus:border-indigo-300
                                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50' value={paramEvent} onChange={(e) => setParamEvent(e.target.value)}>
                                                <option value='' disabled hidden>-- Select Event --</option> 
                                            { 
                                                eventOptions &&
                                                eventOptions.map((option) => (
                                                <option key={option.value} value={option.value}>{option.label}</option>  
                                                )) 
                                            }
                                        </select>
                                    </label>
                                </div>

                                <div className='mt-2'>
                                    <label className='block'>
                                        <span className='text-gray-700'>Vendor</span>
                                        <select name='vendor' className='mt-1 block w-full rounded-md
                                            border-gray-300 shadow-sm focus:border-indigo-300
                                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50' value={paramVendor} onChange={(e) => setParamVendor(e.target.value)}>
                                                <option value='' disabled hidden>-- Select Vendor --</option> 
                                            { 
                                                vendorOptions &&
                                                vendorOptions.map((option) => (
                                                <option key={option.value} value={option.value}>{option.label}</option>  
                                                )) 
                                            }
                                        </select>
                                    </label>
                                </div>

                                <div className='mt-2'>
                                    <label className="block">
                                        <span className="text-gray-700">Address Location</span>
                                        <textarea name="location" className="
                                            mt-1
                                            block
                                            w-full
                                            rounded-md
                                            border-gray-300
                                            shadow-sm
                                            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                        " rows="3" value={paramLocation} onChange={(e) => setParamLocation(e.target.value)}></textarea>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-wrap justify-center content-center'>
                            <div className='w-11/12'>
                                <div className='mt-2'>
                                    <label className="block">
                                        <span className="text-gray-700">Proposed Date 1</span>
                                        <input name='date1' type="date" className="mt-1 block w-full rounded-md
                                            border-gray-300 shadow-sm focus:border-indigo-300
                                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50                                        
                                        " value={paramDate1} onChange={(e) => setParamDate1(e.target.value)} />
                                    </label>
                                </div>

                                <div className='mt-2'>
                                    <label className="block">
                                        <span className="text-gray-700">Proposed Date 2</span>
                                        <input name='date2' type="date" className="mt-1 block w-full rounded-md
                                            border-gray-300 shadow-sm focus:border-indigo-300
                                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50                                        
                                        " value={paramDate2} onChange={(e) => setParamDate2(e.target.value)} />
                                    </label>
                                </div>

                                <div className='mt-2'>
                                    <label className="block">
                                        <span className="text-gray-700">Proposed Date 3</span>
                                        <input name='date3' type="date" className="mt-1 block w-full rounded-md
                                            border-gray-300 shadow-sm focus:border-indigo-300
                                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50                                        
                                        " value={paramDate3} onChange={(e) => setParamDate3(e.target.value)} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-5 mt-7 flex'>
                        <button type="submit" className={`rounded ml-auto py-2 px-6 text-center text-black bg-gradient-to-r 
                        from-green-300 to-blue-400 hover:from-blue-400 hover:to-green-300 hover:text-white ${loading && 'cursor-wait'}`} disabled={loading}>
                            {loading && <i className="fa fa-spinner animate-spin mr-2" aria-hidden="true"></i>} 
                                Submit
                        </button>
                    </div>
                </form>                                
                           
            </div>
        </MainLayout>
    );
}

export default Create;