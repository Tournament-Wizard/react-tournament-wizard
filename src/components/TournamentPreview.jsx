import LeagueOfLegendsImg from "../assets/images/leagueOfLegends.png"


export default function PageSection({ id, name, game, participants_count, status }) {
  
  return (
    <div className="w-full bg-dark-400" style={{backgroundImage: `url("${LeagueOfLegendsImg}")`}}>
      <p>{ name }</p>
      <p>{ game }</p>
      <p>{ participants_count }</p>
      <p>{ status }</p>
    </div>
  );
}
