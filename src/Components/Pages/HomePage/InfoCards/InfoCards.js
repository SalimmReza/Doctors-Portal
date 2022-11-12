import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'


const InfoCards = () => {
    return (
        <div className='grid grid-cols-1 md:cols-2 lg:grid-cols-3 p-10 gap-6 '>
            <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
                <figure><img className='w-16' src={clock} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us now</h2>
                    <p>+8800000000000</p>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-r from-indigo-500 via-red-500 to-pink-500 p-4">
                <figure><img className='w-16' src={marker} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>9:00 Am to 6:00 PM</p>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
                <figure><img className='w-16' src={phone} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Visit Our Location</h2>
                    <p>Brooklyn, NY 10036, United States.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;