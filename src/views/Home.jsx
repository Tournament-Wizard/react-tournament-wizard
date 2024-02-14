import PlayerBG from "../assets/images/player-bg.jpg"
import Logo from "../assets/images/logo.png"

export default function Home() {
  return (
    <main className="font-roboto-flex">
      <img src={PlayerBG} alt="" className="opacity-[3%] absolute -z-10" />
      <div className="container h-[91vh] p-4 text-center pt-[20vh]">
        <img src={Logo} className="h-[100px] w-auto rounded-xl mx-auto" alt="" />
        <h1 className="text-4xl font-semibold text-white mt-5">
          Tournament <br /> <span className="bg-gradient-to-r from-[#FF003D] to-[#9222A5] inline-block text-transparent bg-clip-text">Wizard</span>
        <p className="text-xl text-dark-200 font-normal mt-4">
          Empower your competitions and tournaments <br /> with magic.
        </p>
        </h1>
      </div>
    </main>
  )
}
