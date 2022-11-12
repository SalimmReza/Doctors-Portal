import React from 'react';
import img from '../../../../assets/images/chair.png'
import InfoCards from '../InfoCards/InfoCards';

const Banner = () => {
    return (
        <div className="hero bg-gray-500 h-[500px]">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10">Get Started</button>
                </div>

            </div>


        </div>
    );
};

export default Banner;