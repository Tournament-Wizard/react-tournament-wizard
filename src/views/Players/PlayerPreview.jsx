import { Icon } from '@iconify/react';

export default function PlayerPreview({ name, nationality, teamTag}) {
  return (
    <div className="bg-dark-500 p-4 rounded text-center">
        <div className="icon bg-dark-400 rounded py-4 mb-2">
            <Icon icon="iconoir:user" width={"100"} height={"100"} className="mx-auto" />
        </div>
      
        <h2 className="text-md font-semibold flex items-center">
            <Icon icon={`emojione:flag-for-${nationality}`} width={"20"} height={"20"} className="mr-2" /> {teamTag} {name}
        </h2>
    </div>
  )
}
