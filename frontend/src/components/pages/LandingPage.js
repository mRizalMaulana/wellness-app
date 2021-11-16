import { Fragment } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <Fragment>
            <div className='mt-5 p-5 bg-white rounded shadow-lg'>
                <div>
                    <h2 className='uppercase text-3xl font-bold'>Welcome</h2>
                    <div className='mt-2'>
                        <p>This is just a test app, for create booking, approve booking and reject booking</p>
                        <h2 className='font-bold text-xl'># How to use :</h2>
                        <p>Login as HR Company User to create booking</p>
                        <p>Login as Admin Vendor User to approve booking or reject booking</p>
                    </div>
                </div>
                
                <div className='mt-3 flex flex-wrap -mx-px overflow-hidden'>
                    <div className='my-px px-px w-full overflow-hidden sm:my-px sm:px-px sm:w-full md:my-2 md:px-2 md:w-1/2'>
                        <p>Login as HR Company User, go to <br/><Link to='/login' className='bg-blue-500 py-1 px-4 text-white rounded hover:bg-blue-400'> Login Page </Link></p>

                        <h3 className='font-bold mt-2 text-xl'>HR First Company User </h3>
                        <p> Email : h1@first.com </p>
                        <p> Password : 123456 </p>

                        <p> Email : h2@first.com </p>
                        <p> Password : 123456 </p>

                        <h3 className='font-bold mt-2 text-xl'>HR Second Company User </h3>
                        <p> Email : h1@second.com </p>
                        <p> Password : 123456 </p>

                        <h3 className='font-bold mt-2 text-xl'>HR Third Company User </h3>
                        <p> Email : h1@third.com </p>
                        <p> Password : 123456 </p>
                    </div>
                    <div className='my-px px-px w-full overflow-hidden sm:my-px sm:px-px sm:w-full md:my-2 md:px-2 md:w-1/2'>
                    <p>Login as Admin Vendor User, go to <br/><Link to='/vendor/login' className='bg-blue-500 py-1 px-4 text-white rounded hover:bg-blue-400'> Login Page </Link></p>
                    </div>
                </div>
            </div>            
        </Fragment>
    )
};

export default LandingPage;