import React, { Fragment, useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <Fragment>
            <div className='mt-28'>
                <div className='bg-white max-w-sm rounded overflow-hidden shadow-lg mx-auto'>
                    <div className='bg-gradient-to-r from-green-300 to-blue-400'>
                        <h2 className='text-center text-black py-2'>Please Login</h2>
                    </div>

                    <form onSubmit={onSubmit} className='my-3'>
                        <div className='px-5 mt-2'>
                            <label className="block">
                                <span className="text-gray-700">Email</span>
                                <input type="email" name="email" value={email} onchange={onChange}
                                       className="mt-1 block w-full rounded-md
                                    border-gray-300 shadow-sm focus:border-indigo-300
                                    focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                       placeholder="john@example.com"/>
                            </label>
                        </div>

                        <div className='px-5 mt-2'>
                            <label className="block">
                                <span className="text-gray-700">Password</span>
                                <input type="password" name='password' value={password} onChange={onchange}
                                       className="mt-1 block w-full rounded-md
                                    border-gray-300 shadow-sm focus:border-indigo-300
                                    focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </label>
                        </div>

                        <div className='px-5 my-5'>
                            <button type='submit' className='rounded py-2 text-center text-black w-full bg-gradient-to-r from-green-300 to-blue-400 hover:from-blue-400 hover:to-green-300 hover:text-white'>Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </Fragment>
    );
}

export default Login;