"use client"
import React from 'react'
import { toast } from 'react-toastify'

const TaskCard = ({ taskData }) => {
    const { _id, title, discription } = taskData

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:3000/api/task/${id}`, { method: 'DELETE' })
        if (response.ok) {
            return toast.error("Deleted Sucessfuly")
        }
    }

    return (
        <>
            <div draggable className="bg-pink-100 m-4 p-3 rounded-lg shadow-md shadow-pink-300">
                <h1 className='font-medium mb-2'>{title}</h1>
                <h1>{discription}</h1>
                <div className='pt-3 mt-2 border-t border-slate-400 flex justify-evenly items-center'>
                    <button className="btn btn-sm btn-success">Edit</button>
                    <button className="btn btn-sm btn-error" onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default TaskCard