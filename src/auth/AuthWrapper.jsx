import { createContext, useContext, useState } from "react"
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigations";


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {
     const [user, setUser] = useState({ name: "", isAuthenticated: false });

     const login = (userName, password) => {
     return new Promise((resolve, reject) => {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Accept", "application/json");
          myHeaders.append("Authorization", "6872eee4-6c81-4625-a7ae-9c85d14033b9");

          const raw = JSON.stringify({
               "username": userName,
               "password": password
          });

          const requestOptions = {
               method: "POST",
               headers: myHeaders,
               body: raw,
               redirect: "follow"
          };

          fetch("http://localhost:8080/api/users/auth", requestOptions)
               .then((response) => response.json()) // Parse response as JSON
               .then((result) => {
                    if (result.status === "success") {
                         setUser({ name: userName, isAuthenticated: true });
                         resolve("success");
                    } else {
                         reject("Incorrect credentials");
                    }
               })
               .catch((error) => {
                    console.error(error);
                    reject("Error occurred while logging in");
               });
     });
          
          
     }
     const logout = () => {
          setUser({ name: "", isAuthenticated: false });
     }


     return (
          
               <AuthContext.Provider value={{user, login, logout}}>
                    <>
                         <RenderMenu />
                         <RenderRoutes />
                    </>
                    
               </AuthContext.Provider>
          
     )

}