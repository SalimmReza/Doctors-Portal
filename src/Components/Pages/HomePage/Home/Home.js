import React from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services/Services';
import Testimonials from '../Testimonials/Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto mt-10' >
            <div className=' bg-gray-500'>
                <Banner></Banner>
                <InfoCards></InfoCards>
            </div>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;