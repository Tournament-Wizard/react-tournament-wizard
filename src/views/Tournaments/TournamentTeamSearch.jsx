import React, { useEffect, useState } from 'react';

export default function TournamentTeamSearch() {
    const [teams, setTeams] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    
    useEffect(() => {
        const fetchTeams = async () => {
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
        fetchTeams();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
  
    return (
        <div className="w-1/2 my-4">
            <input
                type="text"
                className="p-2 rounded w-full"
                placeholder="Search for a team"
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul className="mt-2 h-[300px] overflow-auto">
                {teams &&
                    teams
                        .filter(team => team.name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((team, index) => (
                            <div
                                key={team.id}
                                className={`cursor-pointer ${
                                    index % 2 === 0 ? 'bg-dark-500' : 'bg-[#0e0d0d]'
                                } border-l-2 border-dark-400 hover:border-[#FF003D] p-2 text-dark-200 hover:text-[#FF003D]`}
                            >
                                {team.name}
                            </div>
                        ))}
            </ul>
        </div>
    );
}
