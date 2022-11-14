import { transparent } from 'daisyui/src/colors';
import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, setTreatment, selected }) => {
    const { name, slots } = treatment; //treatment is appointment options
    console.log("slots", slots);
    const date = format(selected, 'PP')


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(slot, name, email, phone);
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }


        console.log(booking);
        setTreatment(null);
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleBooking} className='grid gap-2'>
                        <h3 className="text-lg font-bold">{name}</h3>
                        <input type="text" name='' value={date} disabled className="input input-bordered w-full " ></input>
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Type Name" className="input input-bordered w-full " />
                        <input type="text" name='email' placeholder="Type Email" className="input input-bordered w-full " />
                        <input type="text" name='phone' placeholder="Type Phone" className="input input-bordered w-full " /> <br />
                        <button className="btn btn-active btn-secondary w-full ">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;