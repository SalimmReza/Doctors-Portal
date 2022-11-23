import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../SharedPage/DeleteModal/DeleteModal';



const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);


    const closeModal = () => {
        setDeletingDoctor(null);
    }

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-mu-pink.vercel.app/doctors`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            return data;

        }
    })

    const handleDeleteDoctor = doctor => {
        fetch(`https://doctors-portal-server-mu-pink.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} deleted successfully`)
                }
            })
    }


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

                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>



                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <DeleteModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
                    successAction={handleDeleteDoctor}
                    successButtonName="Delete"
                    modalData={deletingDoctor}
                    closeModal={closeModal}

                >
                </DeleteModal>
            }
        </div >
    );
};

export default ManageDoctors;