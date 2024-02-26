import LeagueOfLegendsImg from "../assets/images/leagueOfLegends.png"
import { Icon } from '@iconify/react';


export default function PageSection({ id, name, game, participants_count, status }) {
  
  return (
    <div className="w-full rounded-xl bg-contain" style={{backgroundImage: `url("${LeagueOfLegendsImg}")`}}>

      <div className="grid grid-cols-2 p-3 h-[13vh]">
        <div className="count">
          <p className="flex items-center">
            <Icon icon="mdi:user" width={"18"} height={"18"} className="mr-1" />
            { participants_count }
          </p>
        </div>
        <div className="status text-end">
          <span className="bg-[#561e5f] bg-opacity-50 py-1 px-3 rounded-lg text-[#9222A5] font-bold">
            { status }
          </span>
        </div>
      </div>
      <div className="bg-dark-500 p-3 rounded-b-xl">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 h-[56px]">{ name }</h3>
        <h4 className="text-md text-[#FF003D]">{ game }</h4>
      </div>
      
    </div>
  );
}
