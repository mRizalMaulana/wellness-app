import React, {Fragment} from 'react';

const Navbar = () => {
    return (
        <Fragment>
            <nav className='bg-gradient-to-r from-green-300 to-blue-400 py-3'>
                <div className='container'>
                    <span className='text-black uppercase tracking-wider font-semibold'>wellness app</span>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navbar;