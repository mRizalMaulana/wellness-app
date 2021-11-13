import { Fragment } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <Fragment>
            <div className='mt-5 p-5 bg-white rounded shadow-lg'>
                <h2 className='uppercase text-3xl font-bold'>Welcome</h2>

                <div className='mt-3'>
                    <p>This is just a test app</p>
                    <h2 className='font-bold text-xl'># How to use :</h2>
                    <p>Login as HR Company User, go to <Link to='/login' className='bg-blue-500 py-1 px-4 text-white rounded hover:bg-blue-400'> Login Page </Link></p>
                
                    <h3 className='font-bold mt-2 text-xl'> Company User </h3>
                    <p> Email : firsthr@firstcompany.com </p>
                    <p> Password : 123456 </p>

                </div>         
            </div>            
        </Fragment>
    )
};

export default LandingPage;