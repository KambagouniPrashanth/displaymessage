import { createContext, useState } from "react";

export const UserContext=createContext();

export default function UserProvider({children}){
    const[user,setUser]=useState("")

    const login=()=>{
        setUser("Prashanth")
    }
    const logout=()=>{
        setUser(null)
    }


    return(
        <UserContext.Provider value={
              { user,
                login,
                logout,

            }
           
        }>
            {children}
        </UserContext.Provider>
    )

}
