import { Link } from "react-router-dom";
import TournamentPreview from "../components/TournamentPreview.jsx";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tournaments, setTournaments] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
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

        const response = await fetch('http://localhost:8080/api/tournaments', requestOptions);
        if (!response.ok) {
          throw new Error('Failed to fetch tournaments');
        }
        const data = await response.json();
        setTournaments(data);
      } catch (error) {
        console.error('Error fetching tournaments:', error);
      }
    };

    // Call fetchTournaments function
    fetchTournaments();
  }, []);

  return (
    <div className="font-roboto-flex container p-4">
      <div className="grid grid-cols-3">
        <div className="left col-span-2">
          <h2 className="text-2xl mt-3">My Tournaments</h2>
        </div>
        <div className="right">
          <Link to = "/dashboard/new"
            type="submit"
            className="block w-3/4 rounded text-lg p-2 bg-gradient-to-r from-[#FF003D] to-[#9222A5] text-white font-bold text-center float-right">
              CREATE TOURNAMENT
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-4 gap-5">
        {tournaments &&
          tournaments.map(tournament => (
            <TournamentPreview key={tournament.id} name={tournament.name}
            game={tournament.game}
            participants_count={tournament.participants_count}
            status={tournament.status} />
          ))}
      </div>
    </div>
  );
}
