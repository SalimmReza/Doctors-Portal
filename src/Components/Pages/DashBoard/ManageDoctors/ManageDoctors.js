import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            return data;

        }
    })


    return (
        <div className='p-24'>
            <h1>All Doctors</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>
                                specialty
                            </th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((doctor, i) => <tr>
                                <th>{i + 1}</th>
                                <td><img className='w-16 h-16' src={doctor.image} alt="" /></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>

                                <td> <button className='btn bg-red-500'>Delete</button> </td>



                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageDoctors;