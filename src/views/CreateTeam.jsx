import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function CreateTeam() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        teamtag: '',
        coach: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetchTeams();
            navigate("/teams");
        } catch (err) {
            console.error('Error creating team:', err);
        }
    };

    const fetchTeams = async () => {
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

            const response = await fetch('http://localhost:8080/api/teams', requestOptions);
            if (!response.ok) {
                throw new Error('Failed to create team');
            }
        } catch (error) {
            console.error('Error creating team:', error);
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
            <h2 className='text-xl font-bold'>Create Team</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-6 w-[35vw]'>
                    <div className='mt-4'>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Name</label>
                        <input type="text" name="name" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="teamtag" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Nametag</label>
                        <input type="text" name="teamtag" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.teamtag} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label for="coach" class="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Coach</label>
                        <input type="text" name="coach" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.coach} onChange={handleInputChange} required />
                    </div>
                </div>
                <div className='mt-4'>
                    <button type="submit" className='text-white bg-gradient-to-r from-[#FF003D] to-[#9222A5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
                </div>
            </form>
        </div>
    );
}
