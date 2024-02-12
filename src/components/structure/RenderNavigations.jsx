import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./Navigations.jsx";
import Logo from "../../assets/images/Logo.png"

export const RenderRoutes = () => {
    const { user } = AuthData();
        
    return (
         <Routes>
         { nav.map((r, i) => {
              
              if (r.isPrivate && user.isAuthenticated) {
                   return <Route key={i} path={r.path} element={r.element}/>
              } else if (!r.isPrivate) {
                   return <Route key={i} path={r.path} element={r.element}/>
              } else return false
         })}
         
         </Routes>
    )
}

export const RenderMenu = () => {
   
    const { user, logout } = AuthData()

    const MenuItem = ({r}) => {
         return (
               <li className="mr-5 text-md text-dark-200">
                    <Link to={r.path}>{r.name}</Link>
               </li>      
         )
    }
    return (
          <header className="bg-dark-500">
               <div className="container grid grid-cols-2">
                    <div className="flex flex-wrap items-center justify-between p-4">
                         <img src={Logo} className="h-12 w-12 rounded" />
                    </div>
                    <div className="hidden w-full md:block md:w-auto">
                         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row justify-center relative top-3">
                         { nav.map((r, i) => {
                              
                              if (!r.isPrivate && r.isMenu) {
                                   return (
                                        <MenuItem key={i} r={r}/>
                                   )
                              } else if (user.isAuthenticated && r.isMenu) {
                                   return (
                                        <MenuItem key={i} r={r}/>
                                   )
                              } else return false
                              } )}

                              { user.isAuthenticated ?
                              <li className="mr-5 text-md text-dark-200"><Link to={'/login'} onClick={logout}>Log out</Link></li>
                              :
                              <li className="mr-5 text-md text-dark-200"><Link to={'login'}>Log in</Link></li> 
                         }   
                         </ul>
                    </div>
               </div>
               
          </header>
    )
}
