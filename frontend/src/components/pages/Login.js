import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const Login = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        const user = localStorage.getItem('companyUser');
        if (user) {
            history.push('/company/booking');
        }
    },[history]);
    // const [user, setUser] = useState({
    //     email: '',
    //     password: ''
    // });

    // const { email, password } = user;

    // const onChange = e => setUser({...user, [e.target.name]: e.target.value});
    const baseUrl = process.env.REACT_APP_BACKEND_HOST;
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "Content-type":"application/json"
                }
            }
            setError(false);
            setLoading(true);

            // const data = await fetch(`${baseUrl}/api/company-user/login`,{
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: {email: email, password: password}
            // });

            const {data} = await axios.post(`${baseUrl}/api/company-user/login`, {
                email,
                password
            }, config);

            console.log(data);
            localStorage.setItem('companyUser',JSON.stringify(data));

            setLoading(false);
            history.push('/company/booking');
        } catch (err) {
            setError(err.response.data.message);
            setLoading(false);
        }
    }

    return (
        <Fragment>
            <div className='mt-28'>
                <div className='bg-white max-w-sm rounded overflow-hidden shadow-lg mx-auto'>
                    <div className='bg-gradient-to-r from-green-300 to-blue-400'>
                        <h2 className='text-center text-black py-2'>Please Login</h2>
                    </div>

                        {
                            error && 

                            <div className='px-5 mt-2'>
                                <label className='block text-center bg-red-400 w-full text-white py-2'>
                                    {error}
                                </label>
                            </div>
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
                            <button type="submit" className='rounded py-2 text-center text-black w-full bg-gradient-to-r 
                            from-green-300 to-blue-400 hover:from-blue-400 hover:to-green-300 hover:text-white' disabled={loading}>
                                {loading && <i className="fa fa-spinner animate-spin" aria-hidden="true"></i>} 
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