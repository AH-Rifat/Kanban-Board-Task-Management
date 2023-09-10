import React from 'react'

const TaskCard = ({taskData}) => {
    const {_id ,title, discription} = taskData

    const handleDelete = (id) =>{
        alert(id)
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