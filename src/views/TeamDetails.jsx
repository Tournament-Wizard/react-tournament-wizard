import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function TeamDetails() {
    const [team, setTeam] = useState(null);
    const { id } = useParams();

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
            } catch (error) {
                console.error('Error fetching team:', error);
                // Handle error state here
            }
        };
        // Call fetchTeam function
        fetchTeam();
    }, [id]);

    return (
        team && (
            <div className='container p-4'>
                <div>
                    {team.teamtag}
                    {team.name}
                    {team.coach}
                </div>
                <Link to={`/teams/${id}/edit`} type="submit" className="block w-[200px] mx-auto rounded text-lg p-2 bg-gradient-to-r from-[#FF003D] to-[#9222A5] text-white font-bold text-center float-right">
                    Edit Team
                </Link>
            </div>
        )
    );
}    