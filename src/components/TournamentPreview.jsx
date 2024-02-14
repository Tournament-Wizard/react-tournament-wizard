import LeagueOfLegendsImg from "../assets/images/leagueOfLegends.png"


export default function PageSection({ id, name, game, participantsCount, status }) {
  
  return (
    <div className="w-full bg-dark-400" style={{backgroundImage: `url("${LeagueOfLegendsImg}")`}}>
      
    </div>
  );
}
