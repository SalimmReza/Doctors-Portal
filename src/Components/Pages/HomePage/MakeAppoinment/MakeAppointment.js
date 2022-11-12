import React from 'react';
import img1 from '../../../../assets/images/appointment.png'
import img2 from '../../../../assets/images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className='mt-44'
            style={{
                background: `url(${img1})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img2} alt="" className="-mt-36 hidden md:block lg:w-1/2 rounded-lg " />
                    <div>
                        <h4 className='text-lg font-bold text-white'>Appointment</h4>
                        <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10">AppointMent</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;