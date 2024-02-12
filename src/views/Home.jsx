import TournamentPreview from "../components/TournamentPreview.jsx"

export default function Home() {
  return (
    <main className="container">
      <div className="h-[91vh] p-4">
        <h1 className="text-white text-xl">Dashboard</h1>
        <div className="grid grid-cols-5 mt-2 gap-4">
          <TournamentPreview name={"Circuito Tormenta Open Qualifier"} game={"League of Legends"} participantsCount={23} />
          <TournamentPreview name={"Rocket League Open Series"} game={"Rocket League"} participantsCount={23} />
          <TournamentPreview name={"CSGO MAJOR Qualifier"} game={"CSGO"} participantsCount={23} />
          <TournamentPreview name={"Valorant Rising Cup Series"} game={"Valorant"} participantsCount={23} />

        </div>
      </div>
    </main>
  )
}
