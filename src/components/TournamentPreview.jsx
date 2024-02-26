import GamesImg from "../assets/images/games.png"
import LeagueOfLegendsImg from "../assets/images/leagueOfLegends.png"
import ValorantImg from "../assets/images/Valorant.png"
import RocketLeagueImg from "../assets/images/RocketLeague.png"
import CSGOImg from "../assets/images/CSGO.png"
import { Icon } from '@iconify/react';


export default function PageSection({ id, name, game, participants_count, status }) {
  
  let openStatusBg = "bg-[#9222A5]";
  let closedStatusBg = "bg-red-600";
  let bgColor;

  if (status.toLowerCase() === 'open') {
    bgColor = openStatusBg;
  } else {
    bgColor = closedStatusBg;
  }

  let gameImg;
  if (game.toLowerCase() === 'league of legends') {
    gameImg = LeagueOfLegendsImg;
  } else if(game.toLowerCase() === 'valorant') {
    gameImg = ValorantImg;
  } else if(game.toLowerCase() === 'rocket league') {
    gameImg = RocketLeagueImg;
  } else if(game.toLowerCase() === 'csgo') {
    gameImg = CSGOImg;
  } else {
    gameImg = GamesImg;
  }

  return (
    <div className="w-full rounded-xl bg-contain" style={{backgroundImage: `url("${gameImg}")`}}>

      <div className="grid grid-cols-2 p-3 h-[13vh]">
        <div className="count">
          <p className="flex items-center">
            <Icon icon="mdi:user" width={"18"} height={"18"} className="mr-1" />
            { participants_count }
          </p>
        </div>
        <div className="status text-end">
        <span className={`${bgColor} bg-opacity-75 py-1 px-3 rounded-lg text-white`}>
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
