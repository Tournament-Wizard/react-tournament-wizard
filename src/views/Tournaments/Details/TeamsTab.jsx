import React from 'react'
import { useParams } from 'react-router-dom';

export default function TeamsTab({ teamData }) {
  const { id } = useParams();

    return (
        <>
            {teamData && (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">Team</p>
                            <p className="text-md">{teamData.teamtag}</p>
                            <p className="text-md">{teamData.name}</p>
                        </div>

                        <div className="my-1">
                            <p className="text-sm text-dark-200 flex items-center">Coach</p>
                            <p className="text-md">{teamData.coach}</p>
                        </div>
                    </div>
  
                )}
        </>
    );
}
