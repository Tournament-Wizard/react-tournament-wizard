import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function TournamentDetails({ match }) {
    const [tournament, setTournament] = useState(null);
    const { id } = useParams();

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
            } catch (error) {
                console.error('Error fetching tournament:', error);
            }
        };
        // Call fetchTournament function
        fetchTournament();
    }, [id]);

    return (
        <div className="container">
            <div>Tournament Details</div>
            {/* Render tournament details here */}
            {tournament && (
                <div>
                    <h2>{tournament.name}</h2>
                    <p>Description: {tournament.description}</p>
                    <p>Status: {tournament.status}</p>
                    <p>Format: {tournament.format}</p>
                    <p>Starting Date: {tournament.starting_date}</p>
                    <p>Finishing Date: {tournament.finishing_date}</p>
                    <p>Game: {tournament.game}</p>
                    <p>Location: {tournament.location}</p>
                    <p>Supervisor: {tournament.supervisor}</p>
                    <p>Participants Count: {tournament.participants_count}</p>
                    <Link to={`/tournaments/${id}/edit`}
                        type="submit"
                        className="block w-3/4 rounded text-lg p-2 bg-gradient-to-r from-[#FF003D] to-[#9222A5] text-white font-bold text-center float-right">
                        Edit Tournament
                    </Link>
                </div>
            )}
        </div>
    );
}
