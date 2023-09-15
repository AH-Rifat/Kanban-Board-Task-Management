"use client"
import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard'

const Board = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API route you created
        fetch('http://localhost:3000/api/task')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='flex gap-6 mx-auto w-3/4 mt-5'>
            <div className='bg-pink-200 rounded-lg w-full h-full'>
                <h1 className='text-center my-2 font-medium'>To Do</h1>
                {
                    data.map((item) => {
                        return <TaskCard key={item._id} taskData={item} />
                    })
                }
            </div>
            <div className='bg-pink-200 rounded-lg w-full h-full'>
                <h1 className='text-center my-2 font-medium'>Doing</h1>
            </div>
            <div className='bg-pink-200 rounded-lg w-full h-full'>
                <h1 className='text-center my-2 font-medium'>Done</h1>
            </div>
        </div>
    )
}

export default Board