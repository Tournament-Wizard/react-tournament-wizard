import Home from "../../views/Home.jsx"
import Login from "../../views/Login.jsx"
import Dashboard from "../../views/Dashboard.jsx"
import CreateTournament from "../../views/CreateTournament.jsx"
import TournamentDetails from "../../views/TournamentDetails.jsx"

export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: false,     isPrivate: false  },
     { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/dashboard",  name: "Tournaments",     element: <Dashboard />,    isMenu: true,     isPrivate: true  },
     { path:     "/dashboard/new",  name: "NewTournament",     element: <CreateTournament />,    isMenu: false,     isPrivate: true  },
     { path:     "/tournaments/:id",  name: "Tournament",     element: <TournamentDetails />,    isMenu: false,     isPrivate: true  },
]