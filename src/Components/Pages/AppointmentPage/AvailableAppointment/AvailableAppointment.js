import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AvailableAppointmentOptions from '../AvailableAppointmentOptions/AvailableAppointmentOptions';
import AppointmentModal from '../AppointmentBanner/AppointmentModal/AppointmentModal';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../SharedPage/Loading/Spinner';



const AvailableAppointment = ({ selected }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selected, 'PP');
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())

    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])

    return (
        <div className='my-10 w-[80%] mx-auto '>
            <p className='text-primary font-bold text-lg'>You picked {format(selected, 'PP')}.</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AvailableAppointmentOptions
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AvailableAppointmentOptions>)
                }
            </div>
            {
                treatment &&
                <AppointmentModal
                    selected={selected}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></AppointmentModal>
            }


        </div>
    );
};

export default AvailableAppointment;