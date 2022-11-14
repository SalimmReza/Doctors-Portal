import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 p-10">

                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl font-bold">Register now!</h1>
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="PhotURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" />

                        </div>
                        <p className='text-red-700'></p>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 border-0 hover:bg-red-500 ">Register</button>
                            <p className='mt-2 text-[15px] font-medium'>or Register With</p>
                        </div>

                        <div className="avatar gap-4 flex justify-center cursor-pointer">

                            <div className="w-9 h-9 rounded-full">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt='' />
                            </div>
                            <div className="w-9 h-9 rounded-full">
                                <img className=''
                                    src="https://www.pngitem.com/pimgs/m/0-6762_circle-fb-logo-icon-photos-facebook-circle-fb.png" alt='' />
                            </div>
                            <div className="w-9 h-9 rounded-full">
                                <img className=''
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='' />
                            </div>

                        </div>

                        <div className='mt-2 text-[15px] font-medium'>
                            <p>Already have an Account! <Link to='/login'><span className='text-red-600'>Login</span></Link></p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;