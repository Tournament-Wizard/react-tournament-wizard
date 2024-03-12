import React from 'react'
import PlayerPreview from "./PlayerPreview"
import { useEffect, useState } from "react";
import {  Link } from 'react-router-dom';

export default function Players() {

    const [players, setPlayers] = useState(null);

    useEffect(() => {
        const fetchPlayers = async () => {
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

                const response = await fetch(`http://localhost:8080/api/players`, requestOptions);
                if (!response.ok) {
                    throw new Error('Failed to fetch teams');
                }
                const data = await response.json();
                setPlayers(data);
            } catch (error) {
                console.error('Error fetching teams:', error);
            }
        };
        // Call fetchTeam function
        fetchPlayers();
    }, []);

    return (
        <div className="container p-4">
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h2 className="text-2xl mt-3">Players</h2>
                </div>
                <div>

                </div>
                <div>
                <Link to = "/players/new"
                    type="submit"
                    className="block w-3/4 rounded text-lg p-2 bg-gradient-to-r from-[#FF003D] to-[#9222A5] text-white font-bold text-center float-right">
                    ADD PLAYER
                </Link>
                </div>
            </div>
        
            <div className="grid grid-cols-6 gap-4 mt-4">
                    {players &&
                        players.map(player => (
                            <PlayerPreview key={player.id} id={player.id} name={player.name} nationality={player.nationality} teamTag={player.teamtag} />
                    ))}
            </div>
        </div>
    )
}
