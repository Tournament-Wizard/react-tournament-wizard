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
        <div>
            <h1>Create Tournament</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" required />
                <input type="text" name="status" value={formData.status} onChange={handleInputChange} placeholder="Status" required />
                <input type="text" name="format" value={formData.format} onChange={handleInputChange} placeholder="Format" required />
                <input type="text" name="starting_date" value={formData.starting_date} onChange={handleInputChange} placeholder="Starting Date" required />
                <input type="text" name="finishing_date" value={formData.finishing_date} onChange={handleInputChange} placeholder="Finishing Date" required />
                <input type="text" name="game" value={formData.game} onChange={handleInputChange} placeholder="Game" required />
                <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" required />
                <input type="text" name="supervisor" value={formData.supervisor} onChange={handleInputChange} placeholder="Supervisor" required />
                <input type="text" name="participants_count" value={formData.participants_count} onChange={handleInputChange} placeholder="Participants Count" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
