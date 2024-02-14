import { createContext, useContext, useState, useEffect } from "react"
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigations";


const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);


export const AuthWrapper = () => {
     const [user, setUser] = useState({ name: "", isAuthenticated: false });

     useEffect(() => {
          // Check if user cookie exists
          const userCookie = getCookie("user");
          if (userCookie) {
              const userData = JSON.parse(decodeURIComponent(userCookie));
              setUser(userData);
          }
      }, []);

     const login = (userName, password) => {
     return new Promise((resolve, reject) => {
          const myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Accept", "application/json");
          myHeaders.append("x-api-key", "6872eee4-6c81-4625-a7ae-9c85d14033b9");

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
                         document.cookie = `user=${encodeURIComponent(JSON.stringify({ name: userName, isAuthenticated: true }))}; path=/`;
                         setUser({ name: userName, isAuthenticated: true });
                         resolve("success");
                    } else {
                         reject("Incorrect credentials");
                    }
               })
               .catch((error) => {
                    reject("Error occurred while logging in");
               });
     });
          
          
     }
     const logout = () => {
          document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          setUser({ name: "", isAuthenticated: false });
     }

     const getCookie = (name) => {
          const cookies = document.cookie.split("; ");
          for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i].split("=");
              if (cookie[0] === name) {
                  return cookie[1];
              }
          }
          return null;
      };


     return (
          
               <AuthContext.Provider value={{user, login, logout}}>
                    <>
                         <RenderMenu />
                         <RenderRoutes />
                    </>
                    
               </AuthContext.Provider>
          
     )

}