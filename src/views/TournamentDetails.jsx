import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';

import GamesImg from "../assets/images/games.png";
import LeagueOfLegendsImg from "../assets/images/leagueOfLegends.png";
import ValorantImg from "../assets/images/Valorant.png";
import RocketLeagueImg from "../assets/images/RocketLeague.png";
import CSGOImg from "../assets/images/CSGO.png";

export default function TournamentDetails({ match }) {
    const [tournament, setTournament] = useState(null);
    const [gameImg, setGameImg] = useState(GamesImg); // Initialize with default image
    const { id } = useParams();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

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
                // Handle error state here
            }
        };
        // Call fetchTournament function
        fetchTournament();
    }, [id]);

    useEffect(() => {
        if (tournament) {
            let newGameImg;
            switch (tournament.game.toLowerCase()) {
                case 'league of legends':
                    newGameImg = LeagueOfLegendsImg;
                    break;
                case 'valorant':
                    newGameImg = ValorantImg;
                    break;
                case 'rocket league':
                    newGameImg = RocketLeagueImg;
                    break;
                case 'csgo':
                    newGameImg = CSGOImg;
                    break;
                default:
                    newGameImg = GamesImg;
            }
            setGameImg(newGameImg);
        }
        
    }, [tournament]);

    // Function to format dates
    const formatDates = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', options);
    };

    return (
        <>
            {tournament && (
                <div className="game-img h-[14vh] font-roboto-flex" style={{ backgroundImage: `url("${gameImg}")` }}>
                    <div className="container px-4 py-8">
                        <h2 className="text-white font-bold text-3xl">
                            { tournament.name }
                        </h2>
                        <h4 className="text-[#FF003D] mt-2">
                            {tournament.game}
                        </h4>
                    </div>
                </div>
            )}
            <div className="container p-4 font-roboto-flex">
                {tournament && (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="my-1 col-span-2">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="fluent:text-description-16-filled" width={"18"} height={"18"} className="mr-1" />Description
                            </p>
                            <p className="text-md">{tournament.description}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="lets-icons:status" width={"18"} height={"18"} className="mr-1" />Status
                            </p>
                            <p className="text-md">{tournament.status}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="mdi:location" width={"18"} height={"18"} className="mr-1" />Location
                            </p>
                            <p className="text-md">{tournament.location}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="mdi:bracket" width={"18"} height={"18"} className="mr-1" />Format
                            </p>
                            <p className="text-md">{tournament.format}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="mdi:calendar" width={"18"} height={"18"} className="mr-1" />Dates
                            </p>
                            <p className="text-md">{formatDates(tournament.starting_date)} - {formatDates(tournament.finishing_date)}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="mdi:user" width={"18"} height={"18"} className="mr-1" />Supervisor
                            </p>
                            <p className="text-md">{tournament.supervisor}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="mdi:users" width={"18"} height={"18"} className="mr-1" />Participants
                            </p>
                            <p className="text-md">{tournament.participants_count}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
