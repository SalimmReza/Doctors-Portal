import React from 'react';
import img from '../../../../assets/images/treatment.png'

const Care = () => {
    return (
        <div className="hero  bg-gray-500 mt-24 rounded-xl shadow-xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className=" rounded-lg shadow-2xl lg:w-[35%]" alt='' />
                <div className='text-white'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Care;