import PlayerPreview from "./PlayerPreview"
import { Link } from "react-router-dom";

export default function Players() {
  return (
    <div className="container p-4">
        <div className="grid grid-cols-3 gap-4">
            <div>
                <h2 className="text-2xl mt-3">Players</h2>
            </div>
            <div>

            </div>
            <div>
            <Link to = "/players/new"
                type="submit"
                className="block w-3/4 rounded text-lg p-2 bg-gradient-to-r from-[#FF003D] to-[#9222A5] text-white font-bold text-center float-right">
                ADD PLAYER
            </Link>
            </div>
        </div>
      
        <div className="grid grid-cols-6 gap-4 mt-4">
            <PlayerPreview name={"Zeus"} nationality={"south-korea"} teamTag={"T1"} />
            <PlayerPreview name={"Oner"} nationality={"south-korea"} teamTag={"T1"} />
            <PlayerPreview name={"Faker"} nationality={"south-korea"} teamTag={"T1"} />
            <PlayerPreview name={"Gumayusi"} nationality={"south-korea"} teamTag={"T1"} />
            <PlayerPreview name={"Keria"} nationality={"south-korea"} teamTag={"T1"} />
            <PlayerPreview name={"DoinB"} nationality={"china"} teamTag={"FPX"} />
            <PlayerPreview name={"ElYoya"} nationality={"spain"} teamTag={"MDK"} />
            <PlayerPreview name={"Supa"} nationality={"spain"} teamTag={"MDK"} />
        </div>
    </div>
  )
}
