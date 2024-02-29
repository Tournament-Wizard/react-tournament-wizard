import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useParams, Link } from 'react-router-dom';

import BracketTab from './Tournaments/Details/BracketTab';
import DetailsTab from './Tournaments/Details/DetailsTab';
import TeamsTab from './Tournaments/Details/TeamsTab';

import GamesImg from "../assets/images/games.png";
import LeagueOfLegendsImg from "../assets/images/leagueOfLegends.png";
import ValorantImg from "../assets/images/Valorant.png";
import RocketLeagueImg from "../assets/images/RocketLeague.png";
import CSGOImg from "../assets/images/CSGO.png";

export default function TournamentDetails() {
    const [tournament, setTournament] = useState(null);
    const [gameImg, setGameImg] = useState(GamesImg); // Initialize with default image
    const { id } = useParams();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

    const [selectedTab, setSelectedTab] = useState('bracket');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
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


    return (
        <>
            {tournament && (
                <div className="game-img h-[14vh] font-roboto-flex" style={{ backgroundImage: `url("${gameImg}")` }}>
                    <div className="container px-4 py-8">
                        <h2 className="text-white font-bold text-3xl">
                            {tournament.name}
                        </h2>
                        <h4 className="text-[#FF003D] mt-2">
                            {tournament.game}
                        </h4>
                    </div>
                </div>
            )}

            <div className="tabs container p-4">
                <button className={`text-xl mr-8 ${selectedTab === 'bracket' ? 'active text-red-600 underline underline-offset-[11px]' : ''}`} onClick={() => handleTabClick('bracket')}>
                    Bracket
                </button>
                <button className={`text-xl mr-8 ${selectedTab === 'teams' ? 'active text-red-600 underline underline-offset-[11px]' : ''}`} onClick={() => handleTabClick('teams')}>
                    Teams
                </button>
                <button className={`text-xl mr-8 ${selectedTab === 'details' ? 'active text-red-600 underline underline-offset-[11px]' : ''}`} onClick={() => handleTabClick('details')}>
                    Details
                </button>
                <div className="h-[1px] mt-1.5 bg-dark-100"></div>
            </div>
            <div className="container p-4 font-roboto-flex">
                {selectedTab === 'bracket' && <BracketTab />}
                {selectedTab === 'teams' && <TeamsTab />}
                {selectedTab === 'details' && <DetailsTab tournamentData={tournament} />}
            </div>
        </>
    );
}
