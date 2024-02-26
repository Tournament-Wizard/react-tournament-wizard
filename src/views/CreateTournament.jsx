import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function CreateTournament() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        status: '',
        format: '',
        starting_date: '',
        finishing_date: '',
        game: '',
        location: '',
        supervisor: '',
        participants_count: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetchTournaments();
            navigate("/dashboard");
        } catch (err) {
            console.error('Error creating tournament:', err);
        }
    };

    const fetchTournaments = async () => {
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Accept', 'application/json');
            myHeaders.append('x-api-key', '6872eee4-6c81-4625-a7ae-9c85d14033b9');

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(formData),
                redirect: 'follow',
            };

            const response = await fetch('http://localhost:8080/api/tournaments', requestOptions);
            if (!response.ok) {
                throw new Error('Failed to create tournament');
            }
        } catch (error) {
            console.error('Error creating tournament:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className='container p-4'>
            <h2 className='text-xl font-bold'>Create Tournament</h2>
            <form onSubmit={handleSubmit}>
                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div className='mt-4'>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Name</label>
                        <input type="text" name="name" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Description</label>
                        <input type="text" name="description" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.description} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="status" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Status</label>
                        <input type="text" name="status" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.status} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="format" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Format</label>
                        <input type="text" name="format" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.format} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="starting_date" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Starting Date</label>
                        <input type="date" name="starting_date" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.starting_date} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="finishing_date" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Finishing Date</label>
                        <input type="date" name="finishing_date" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.finishing_date} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="game" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Game</label>
                        <input type="text" name="game" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.game} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="location" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Location</label>
                        <input type="text" name="location" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.location} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="supervisor" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Supervisor</label>
                        <input type="text" name="supervisor" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.supervisor} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="participants_count" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Participants Count</label>
                        <input type="number" name="participants_count" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.participants_count} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <button type="submit" className='text-white bg-gradient-to-r from-[#FF003D] to-[#9222A5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
