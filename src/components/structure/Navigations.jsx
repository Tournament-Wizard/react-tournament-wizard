import Home from "../../views/Home.jsx"
import Login from "../../views/Login.jsx"
import Dashboard from "../../views/Dashboard.jsx"

export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: false,     isPrivate: false  },
     { path:     "/login",    name: "Login",       element: <Login />,      isMenu: false,    isPrivate: false  },
     { path:     "/dashboard",  name: "Tournaments",     element: <Dashboard />,    isMenu: true,     isPrivate: true  },
]