import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import CountryJson from "../../utils/Countries.json"

export default function PlayerDetailsEdit() {

  const navigate = useNavigate();
  const [countries, setCountries] = useState(CountryJson);
  const [player, setPlayer] = useState(null);
  const { id } = useParams();
  const [teams, setTeams] = useState(null);
  const [formData, setFormData] = useState({
      name: '',
      nationality: '',
      team: '',
  });

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
          setFormData(data);
      } catch (error) {
          console.error('Error fetching player:', error);
          // Handle error state here
      }
  };
    // Call fetchTeam function
    fetchTeams();
    fetchPlayer();
}, [id]);

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          await updatePlayer();
          navigate("/players");
      } catch (err) {
          console.error('Error creating team:', err);
      }
  };
  

  const updatePlayer = async () => {
    try {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('x-api-key', '6872eee4-6c81-4625-a7ae-9c85d14033b9');

        const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify(formData),
            redirect: 'follow',
        };

        const response = await fetch(`http://localhost:8080/api/players/${id}`, requestOptions);
        if (!response.ok) {
            throw new Error('Failed to update player');
        }
    } catch (error) {
        console.error('Error updating player:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };
  
  function capitalize(str) {
      return str.replace(/\b\w/g, function(char) {
          return char.toUpperCase();
      });
  }

  const handleSelectChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  };

  function findTeamByName(teamsArray, name) {
      // Check if teamsArray is not null and name is not null or undefined
      if (teamsArray && name) {
          // Iterate over the teams array
          for (let i = 0; i < teamsArray.length; i++) {
              // If the current team's name matches the desired name (case-insensitive), return the team
              if (teamsArray[i].name.toLowerCase() === name.toLowerCase()) {
                  return teamsArray[i];
              }
          }
      }
      // Return null if team with the specified name is not found
      return null;
  }

  return (
    <div className='container p-4'>
        <h2 className='text-xl font-bold'>Edit player</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-6 w-[35vw]'>
                <div className='mt-4'>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Name</label>
                    <input type="text" name="name" className='bg-dark-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5' value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className='mt-4'>
                    <label htmlFor="nationality" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Nationality</label>
                    <select name="nationality"  onChange={handleSelectChange} value={formData.nationality}   required className="w-full mb-2 text-sm font-medium p-[10px] bg-no-repeat appearance-none rounded-md bg-dark-300">
                    {countries.map((country, index) => (
                      <option key={index} value={country.name}>{capitalize(country.name)}</option>
                    ))}
                    </select>
                  
                </div>
                <div className='mt-4'>
                    <label htmlFor="team" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Team</label>
                    <select
                      name="team"
                      onChange={handleSelectChange}
                      value={formData.team || ''} // Use empty string if formData.team is null
                      required
                      className="w-full mb-2 text-sm font-medium p-[10px] bg-no-repeat appearance-none rounded-md bg-dark-300"
                    >
                    {teams && teams.map((team, index) => (
                      <option key={index} value={team.id}>{capitalize(team.name)}</option>
                    ))}
                    </select>
                </div>
            </div>
            <div className='mt-4'>
                <button type="submit" className='text-white bg-gradient-to-r from-[#FF003D] to-[#9222A5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
            </div>
        </form>
    </div>
);
}
