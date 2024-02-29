import { Icon } from '@iconify/react';
import { useParams, Link } from 'react-router-dom';

export default function DetailsTab({ tournamentData }) {
    const { id } = useParams();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

    // Function to format dates
    const formatDates = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', options);
    };

    return (
    <div>
      {tournamentData && (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="my-1 col-span-2">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="fluent:text-description-16-filled" width={"18"} height={"18"} className="mr-1" />Description
                            </p>
                            <p className="text-md">{tournamentData.description}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="lets-icons:status" width={"18"} height={"18"} className="mr-1" />Status
                            </p>
                            <p className="text-md">{tournamentData.status}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="mdi:location" width={"18"} height={"18"} className="mr-1" />Location
                            </p>
                            <p className="text-md">{tournamentData.location}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="mdi:bracket" width={"18"} height={"18"} className="mr-1" />Format
                            </p>
                            <p className="text-md">{tournamentData.format}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="mdi:calendar" width={"18"} height={"18"} className="mr-1" />Dates
                            </p>
                            <p className="text-md">{formatDates(tournamentData.starting_date)} - {formatDates(tournamentData.finishing_date)}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="mdi:user" width={"18"} height={"18"} className="mr-1" />Supervisor
                            </p>
                            <p className="text-md">{tournamentData.supervisor}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">
                                <Icon icon="mdi:users" width={"18"} height={"18"} className="mr-1" />Participants
                            </p>
                            <p className="text-md">{tournamentData.participants_count}</p>
                        </div>
                    </div>
  
                )}
                <Link to={`/tournaments/${tournamentData.id}/edit`}
                        type="submit"
                        className="block w-[200px] mx-auto rounded text-lg p-2 bg-gradient-to-r from-[#FF003D] to-[#9222A5] text-white font-bold text-center float-right">
                        Edit Tournament
                </Link>
    </div>
    )
}
