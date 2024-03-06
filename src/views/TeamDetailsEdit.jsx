import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function TeamDetailsEdit() {
    const [team, setTeam] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        teamtag: '',
        coach: '',
    });


    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateTeam();
            navigate(`/teams/${id}`);
        } catch (err) {
            console.error('Error updating team:', err);
        }
    };

    const updateTeam = async () => {
        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Accept', 'application/json');
            myHeaders.append('x-api-key', '6872eee4-6c81-4625-a7ae-9c85d14033b9');

            const requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: JSON.stringify(formData),
                redirect: 'follow',
            };

            const response = await fetch(`http://localhost:8080/api/teams/${id}`, requestOptions);
            if (!response.ok) {
                throw new Error('Failed to update team');
            }
        } catch (error) {
            console.error('Error updating team:', error);
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault(); // Prevent form submission

        try {
            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Accept', 'application/json');
            myHeaders.append('x-api-key', '6872eee4-6c81-4625-a7ae-9c85d14033b9');

            const requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow',
            };

            const response = await fetch(`http://localhost:8080/api/teams/${id}`, requestOptions);
            if (!response.ok) {
                throw new Error('Failed to delete team');
            }
            navigate('/teams');
        } catch (error) {
            console.error('Error deleting team:', error);
        }
    };

    const toggleConfirmation = () => {
        setShowConfirmation(!showConfirmation);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                myHeaders.append('Accept', 'application/json');
                myHeaders.append('x-api-key', '6872eee4-6c81-4625-a7ae-9c85d14033b9');

                const requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow',
                };

                const response = await fetch(`http://localhost:8080/api/teams/${id}`, requestOptions);
                if (!response.ok) {
                    throw new Error('Failed to fetch team');
                }
                const data = await response.json();
                setTeam(data);
                setFormData(data);
            } catch (error) {
                console.error('Error fetching team:', error);
            }
        };
        fetchTeam();
    }, [id]);

    return (
        <div className="container p-4">
            <h2 className="text-xl font-bold">Edit Team</h2>
            <form onSubmit={handleSubmit}>
                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div className='mt-4 col-span-2'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Name</label>
                        <input type="text" name="name" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4 col-span-2'>
                        <label htmlFor="teamtag" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Team Tag</label>
                        <input type="text" name="teamtag" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.teamtag} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4 col-span-2'>
                        <label htmlFor="coach" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Coach</label>
                        <input type="text" name="coach" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.coach} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4 text-end'>
                        <button type="button" onClick={toggleConfirmation} className='text-white bg-dark-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4'>Delete</button>
                        <button type="submit" className='text-white bg-gradient-to-r from-[#FF003D] to-[#9222A5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-6'>Submit</button>
                    </div>
                </div>
            </form>
            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
                    <div className="bg-dark-400 p-6 rounded-lg">
                        <p className="text-white font-semibold mb-4">Are you sure you want to delete this team?</p>
                        <div className="flex justify-end">
                            <button onClick={toggleConfirmation} className="mr-4 text-white hover:text-gray-400">Cancel</button>
                            <button onClick={handleDelete} className="text-red-500 hover:text-red-700">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
