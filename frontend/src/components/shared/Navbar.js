import React, {Fragment, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [companyUser, setCompanyUser] = useState(false);
    const [vendorUser, setVendorUser] = useState(false);

    useEffect(()=> {
        const dataCompanyUser = localStorage.getItem('companyUser');
        const dataVendorUser = localStorage.getItem('vendorUser');

        if (dataCompanyUser) {
            setCompanyUser(true);
        }

        if (dataVendorUser) {
            setVendorUser(true);
        }
        
    },[]);
    // const companyUser = localStorage.getItem('companyUser');
    // const vendorUser = localStorage.getItem('vendorUser');
        
    return (
        <Fragment>
            <nav className='flex bg-gradient-to-r from-green-300 to-blue-400 py-3'>
                <div className='container'>
                <div className='flex mx-auto flex flex-wrap items-center justify-between'>
                    <div className='realtive flex w-full justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                        <Link to='/' className='text-black uppercase tracking-wider font-semibold'>wellness app</Link>
                    
                        <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 
                            border border-solid border-transparent rounded bg-transparent 
                            block lg:hidden outline-none focus:outline-none"
                            type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <i className={"fa" + (navbarOpen ? " fa-times" : " fa-bars")}></i>
                        </button>
                    </div>

                    <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " block" : " hidden")}>
                        <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
                            {
                                companyUser && 
                                <li className='text-center my-2 lg:my-0 border-2 border-black lg:border-none py-2 lg:p-0'>
                                    <Link className='px-3 hover:text-white' to='/company/booking' >Booking</Link>
                                </li>
                            }
                            
                            {
                                vendorUser &&
                                <li className='text-center my-2 lg:my-0 border-2 border-black lg:border-none py-2 lg:p-0'>
                                    <Link className='px-3 hover:text-white' to='/vendor/booking' >Booking</Link>
                                </li>
                            }
                            
                            {
                                !companyUser &&
                                <li className='text-center my-2 lg:my-0 border-2 border-black lg:border-none py-2 lg:p-0'>
                                    <Link className='px-3 hover:text-white' to='/login' >Login</Link>
                                </li>
                            }
                            
                            {
                                companyUser && 
                                <li className='text-center my-2 lg:my-0 border-2 border-black lg:border-none py-2 lg:p-0'>
                                    <Link to='/' className='px-3 hover:text-white' onClick={()=> {
                                        localStorage.removeItem('companyUser');
                                        // history.push('/');
                                        }}>Logout</Link>
                                </li>
                            }
                            
                        </ul>
                    </div>                  
                </div>
                </div>           
            </nav>
        </Fragment>
    );
}

export default Navbar;