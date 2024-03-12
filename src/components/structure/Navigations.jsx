import Home from "../../views/Home.jsx"
import Login from "../../views/Login.jsx"
import Dashboard from "../../views/Dashboard.jsx"
import CreateTournament from "../../views/CreateTournament.jsx"
import TournamentDetails from "../../views/TournamentDetails.jsx"
import TournamentDetailsEdit from "../../views/TournamentDetailsEdit.jsx"
import Players from "../../views/Players/Players.jsx"
import CreatePlayer from "../../views/Players/CreatePlayer.jsx"
import PlayerDetails from "../../views/Players/PlayerDetails.jsx"
import CreateTeam from "../../views/CreateTeam.jsx"
import Teams from "../../views/Teams.jsx"
import TeamDetails from "../../views/TeamDetails.jsx"
import TeamDetailsEdit from "../../views/TeamDetailsEdit.jsx"

export const nav = [
    { path: "/", name: "Home", element: <Home />, isMenu: false, isPrivate: false },
    { path: "/login", name: "Login", element: <Login />, isMenu: false, isPrivate: false },
    { path: "/dashboard", name: "Tournaments", element: <Dashboard />, isMenu: true, isPrivate: true },
    { path: "/dashboard/new", name: "NewTournament", element: <CreateTournament />, isMenu: false, isPrivate: true },
    { path: "/tournaments/:id", name: "Tournament", element: <TournamentDetails />, isMenu: false, isPrivate: true },
    { path: "/tournaments/:id/edit", name: "TournamentEdit", element: <TournamentDetailsEdit />, isMenu: false, isPrivate: true },
    { path: "/players", name: "Players", element: <Players />, isMenu: true, isPrivate: true },
    { path: "/players/new", name: "NewPlayer", element: <CreatePlayer />, isMenu: false, isPrivate: true },
    { path: "/players/:id", name: "PlayerDetails", element: <PlayerDetails />, isMenu: false, isPrivate: true },
    //{ path: "/players/:id/edit", name: "PlayerEdit", element: <PlayerDetailsEdit />, isMenu: false, isPrivate: true },
    { path: "/teams", name: "Teams", element: <Teams />, isMenu: true, isPrivate: true },
    { path: "/teams/new", name: "NewTeam", element: <CreateTeam />, isMenu: false, isPrivate: true },
    { path: "/teams/:id", name: "TeamDetails", element: <TeamDetails />, isMenu: false, isPrivate: true },
    { path: "/teams/:id/edit", name: "TeamDetailsEdit", element: <TeamDetailsEdit />, isMenu: false, isPrivate: true }
];