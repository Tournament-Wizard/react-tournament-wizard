import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function TournamentDetailsEdit() {
    const [tournament, setTournament] = useState(null);
    const { id } = useParams();
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
    

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateTournament();
            navigate(`/tournaments/${id}`);
        } catch (err) {
            console.error('Error updating tournament:', err);
        }
    };

    const updateTournament = async () => {
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

            const response = await fetch(`http://localhost:8080/api/tournaments/${id}`, requestOptions);
            if (!response.ok) {
                throw new Error('Failed to update tournament');
            }
        } catch (error) {
            console.error('Error updating tournament:', error);
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

            const response = await fetch(`http://localhost:8080/api/tournaments/${id}`, requestOptions);
            if (!response.ok) {
                throw new Error('Failed to delete tournament');
            }
            navigate('/dashboard');
        } catch (error) {
            console.error('Error deleting tournament:', error);
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

    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const formatDateForInput = (dateString) => {
        const date = new Date(dateString);
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const fetchTournament = async () => {
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

                const response = await fetch(`http://localhost:8080/api/tournaments/${id}`, requestOptions);
                if (!response.ok) {
                    throw new Error('Failed to fetch tournament');
                }
                const data = await response.json();
                setTournament(data);
                setFormData(data);
            } catch (error) {
                console.error('Error fetching tournament:', error);
            }
        };
        fetchTournament();
    }, [id]);

    return (
        <div className="container p-4">
            <h2 className="text-xl font-bold">Edit Tournament</h2>
            <form onSubmit={handleSubmit}>
                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div className='mt-4 col-span-2'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Name</label>
                        <input type="text" name="name" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4 col-span-2'>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Description</label>
                        <textarea type="text" name="description" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.description} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Status</label>
                        <select 
                            className="w-full mb-2 text-sm font-medium p-[10px] bg-no-repeat appearance-none rounded-md bg-dark-300" 
                            name="status" 
                            onChange={handleSelectChange} 
                            value={formData.status} 
                            required
                        >
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                        </select>
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="format" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Format</label>
                        <input type="text" name="format" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.format} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="starting_date" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Starting Date</label>
                        <input type="date" name="starting_date" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formatDateForInput(formData.starting_date)} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="finishing_date" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Finishing Date</label>
                        <input type="date" name="finishing_date" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formatDateForInput(formData.finishing_date)} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="game" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Game</label>
                        <input type="text" name="game" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.game} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Location</label>
                        <input type="text" name="location" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.location} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="supervisor" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Supervisor</label>
                        <input type="text" name="supervisor" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.supervisor} onChange={handleInputChange} required />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="participants_count" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Participants Count</label>
                        <input type="number" name="participants_count" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.participants_count} onChange={handleInputChange} required />
                    </div>
                </div>
                <div className='mt-4 text-end'>
                        <button type="button" onClick={toggleConfirmation} className='text-white bg-dark-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4'>Delete</button>
                        <button type="submit" className='text-white bg-gradient-to-r from-[#FF003D] to-[#9222A5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-6'>Submit</button>        
                    </div>   
                    </form>
            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
                    <div className="bg-dark-400 p-6 rounded-lg">
                        <p className="text-white font-semibold mb-4">Are you sure you want to delete this tournament?</p>
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