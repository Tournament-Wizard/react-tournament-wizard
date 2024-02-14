import TournamentPreview from "../components/TournamentPreview.jsx"

export default function Dashboard() {
  return (
    <div className="font-roboto-flex container p-4">
      <div className="grid grid-cols-3">
        <div className="left col-span-2">
          <h2 className="text-2xl mt-3">
            My Tournaments
          </h2>
        </div>
        <div className="right">
          <button 
            type="submit"
            className="block w-full rounded text-lg p-2 bg-gradient-to-r from-[#FF003D] to-[#9222A5] text-white font-bold">
                CREATE TOURNAMENT
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-4 gap-5">
        <TournamentPreview />
      </div>
      
    </div>
  )
}

