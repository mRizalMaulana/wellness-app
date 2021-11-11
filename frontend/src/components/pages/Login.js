import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { companyUserLogin } from '../../actions/user';

import Message from '../shared/MessageLayouts/DefaultMessage';


const Login = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, companyUser} = userLogin;

    useEffect(()=> {
        if (companyUser) {
            history.push('/company/booking');
        }
    },[history, companyUser]);

    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch(companyUserLogin(email, password))

    }

    return (
        <Fragment>
            <div className='mt-28'>
                <div className='bg-white max-w-sm rounded overflow-hidden shadow-lg mx-auto'>
                    <div className='bg-gradient-to-r from-green-300 to-blue-400'>
                        <h2 className='text-center text-black py-2'>Please Login</h2>
                    </div>

                        {
                            error && <Message messagetype="error" message={error}/>
                        }

                    <form onSubmit={onSubmit} className='my-3'>
                        <div className='px-5 mt-2'>
                            <label className="block">
                                <span className="text-gray-700">Email</span>
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                       className="mt-1 block w-full rounded-md
                                    border-gray-300 shadow-sm focus:border-indigo-300
                                    focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                       placeholder="john@example.com"/>
                            </label>
                        </div>

                        <div className='px-5 mt-2'>
                            <label className="block">
                                <span className="text-gray-700">Password</span>
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                       className="mt-1 block w-full rounded-md
                                    border-gray-300 shadow-sm focus:border-indigo-300
                                    focus:ring focus:ring-indigo-200 focus:ring-opacity-50" autoComplete="on"/>
                            </label>
                        </div>

                        <div className='px-5 my-5'>
                            <button type="submit" className={`rounded py-2 text-center text-black w-full bg-gradient-to-r 
                            from-green-300 to-blue-400 hover:from-blue-400 hover:to-green-300 hover:text-white ${loading && 'cursor-wait'}`} disabled={loading}>
                                {loading && <i className="fa fa-spinner animate-spin mr-2" aria-hidden="true"></i>} 
                                 Login
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </Fragment>
    );
}

export default Login;