import { createContext, useState } from "react";

export const AuthContext = createContext() ;

function AuthProvider({children}){
    let [isLogin, setIsLogin] = useState(false) ;
    let [isRegistered, setIsRegistered] = useState(false) ;
    let [token , setToken] = useState("") ;
    let [msg,setMsg] = useState(false) ;
    
    return <AuthContext.Provider value={{isLogin,setIsLogin,isRegistered,setIsRegistered, token,setToken,msg,setMsg}}>{children}</AuthContext.Provider>
}

export {AuthProvider} 