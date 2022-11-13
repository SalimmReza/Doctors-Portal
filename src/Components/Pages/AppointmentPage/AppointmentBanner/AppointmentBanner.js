import React, { useState } from 'react';
import img from '../../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ selected, setSelected }) => {
    // const [selected, setSelected] = useState(new Date());
    return (

        <div className="hero bg-gray-500 h-full lg:p-10 ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="rounded-lg shadow-2xl lg:w-1/2" alt='' />
                <div>
                    <DayPicker
                        className='text-white'
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}

                    />
                </div>
            </div>


        </div>

    );
};

export default AppointmentBanner;