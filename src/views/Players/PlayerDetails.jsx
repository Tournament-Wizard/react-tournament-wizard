import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function PlayerDetails() {
  
  const [player, setPlayer] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    const fetchPlayer = async () => {
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

            const response = await fetch(`http://localhost:8080/api/players/${id}`, requestOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch player');
            }
            const data = await response.json();
            setPlayer(data);
        } catch (error) {
            console.error('Error fetching player:', error);
            // Handle error state here
        }
    };
    // Call fetchTeam function
    fetchPlayer();
}, [id]);
  
  return (
    <div className="container p-4">
    <div>
    { player && (<>
      {player.name}
      {player.team_name}
      {player.nationality}
      </>)}
    </div>
    <Link to={`/players/${id}/edit`} type="submit" className="block w-[200px] mx-auto rounded text-lg p-2 bg-gradient-to-r from-[#FF003D] to-[#9222A5] text-white font-bold text-center float-right">
      Edit Player
    </Link>
    </div>
  )
}
