"use client"
import React, { useState } from 'react'

const Navber = () => {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Data was successfully inserted
                // You can redirect or display a success message
                document.getElementById('my_modal_5').close();
            } else {
                // Handle error response
                console.error('Error inserting data');
            }
        } catch (error) {
            console.error('Network error', error);
        }
    };

    return (
        <div className='bg-pink-500 py-4'>
            <div className='flex justify-between items-center mx-5 lg:mx-10'>
                <h1 className='font-bold text-white text-xl'>Kanban Board</h1>
                <button
                    className='bg-orange-300 hover:bg-orange-200 text-slate-800 font-semibold px-4 py-2 rounded-lg'
                    onClick={() => document.getElementById('my_modal_5').showModal()}
                >Add a Task</button>
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form action="" onSubmit={handleSubmit}>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Create a Task</h3>
                        <input name='title' onChange={handleInputChange} type="text" placeholder="Type task name" className="input input-bordered input-sm my-4 w-full" />
                        <textarea name='discription' onChange={handleInputChange} className="textarea textarea-bordered textarea-sm w-full" placeholder="Type task discription"></textarea>
                        <div className="modal-action">
                            {/* <form method="dialog">
                                if there is a button in form, it will close the modal
                            </form> */}
                                <button className="btn btn-sm btn-error">Close</button>
                                <button type='submit' className="btn btn-sm btn-primary mr-2">Add</button>
                        </div>
                    </div>
                </form>
            </dialog>
        </div>
    )
}

export default Navber