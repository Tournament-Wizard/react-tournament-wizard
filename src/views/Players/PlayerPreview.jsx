import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function PlayerPreview({ id, name, nationality, teamTag, teamName}) {
  return (
    <Link to={`/players/${id}`}>
      <div className="bg-gradient-to-b from-[#121212] to-[#212020] w-full rounded-md p-4 text-center">
        <h4 className="font-semibold text-md mt-2">{teamName}</h4>
        <Icon icon="lets-icons:user-light" width={"120"} height={"120"} className="mx-auto mt-4" />
        <h2 className="mt-7 text-lg font-semibold">
          <span className="absolute -ml-7 mt-1">
            <Icon icon={`emojione:flag-for-${nationality}`} width={"20"} height={"20"}/> 
          </span>
          {teamTag} {name}
        </h2>
      </div>
    </Link>
  )
}
