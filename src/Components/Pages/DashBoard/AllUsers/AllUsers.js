import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-mu-pink.vercel.app/users`);
            const data = await res.json();
            return data;

        }
    })

    const handleAdmin = (id) => {
        fetch(`https://doctors-portal-server-mu-pink.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    refetch()
                    toast.success('You made a new admin')

                }
            })
    }
    return (
        <div>
            <h1>All users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td> {user?.role ? "" : <button
                                    onClick={() => handleAdmin(user._id)}
                                    className='btn bg-primary'>Make Admin</button>} </td>
                                <td> <button className='btn bg-red-500'>Delete</button> </td>



                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUsers;
