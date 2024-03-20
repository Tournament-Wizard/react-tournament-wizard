import React from 'react'
import TeamPreview from './TeamPreview'
import { useEffect, useState } from "react";
import {  Link } from 'react-router-dom';

export default function Teams() {
    const [teams, setTeams] = useState(null);

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

                const response = await fetch(`http://localhost:8080/api/teams`, requestOptions);
                if (!response.ok) {
                    throw new Error('Failed to fetch teams');
                }
                const data = await response.json();
                setTeams(data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };
        // Call fetchTeam function
        fetchTeam();
    }, []);

    return (
        <div className='container p-4'>
            <div className="">
                <Link to="/teams/new"
                    type="submit"
                    className="block w-1/5 rounded text-lg p-2 bg-gradient-to-r from-[#FF003D] to-[#9222A5] text-white font-bold text-center ">
                    CREATE TEAM
                </Link>
            </div>
            <div className="grid grid-cols-4 mt-4 gap-5">
                {teams &&
                    teams.map(team => (
                        <TeamPreview key={team.id} id={team.id} name={team.name}
                            teamtag={team.teamtag} coach={team.coach} />
                    ))}
            </div>
        </div>
    )
}
