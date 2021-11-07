import {Fragment} from 'react';

const MainLayout = ({ title, children }) => {
    return (
        <div className='py-5'>
            { 
                title && (<Fragment> <h2> {title} </h2> </Fragment>)
            }
            {
                children
            }
        </div>
    );
}

export default MainLayout;