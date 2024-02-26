import GamesImg from "../assets/images/games.png"
import LeagueOfLegendsImg from "../assets/images/leagueOfLegends.png"
import ValorantImg from "../assets/images/Valorant.png"
import RocketLeagueImg from "../assets/images/RocketLeague.png"
import CSGOImg from "../assets/images/CSGO.png"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";


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
    <Link to = {`/tournaments/${id}`}>
    <div className="w-full rounded-xl bg-contain" style={{backgroundImage: `url("${gameImg}")`}}>
        <div className="grid grid-cols-2 p-3 h-[13vh]">
          <div className="count">
            <p className="flex items-center">
              <Icon icon="mdi:user" width={"18"} height={"18"} className="mr-1" />
              { participants_count }
            </p>
          </div>
        </div>
        <div className="status text-end">
        <span className={`${bgColor} bg-opacity-75 py-1 px-3 rounded-lg text-white`}>
            { status }
          </span>
        </div>
        
      </div>
    </Link>
  );
}
