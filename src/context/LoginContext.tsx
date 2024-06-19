import React, { ReactNode, useState } from "react";

type User = {username : string, token: string | null,setUsername: Function, setToken: Function,signedIn: Boolean, setSignedIn: Function, role: string, setRole: Function};
interface Props {
    children: ReactNode;
}
const defaultUser: User = {
    username: "",
    token: "",
    setUsername: () => {},
    setToken: () => {},
    signedIn: false,
    setSignedIn: () => {},
    role: "",
    setRole: () => {}
};

export const LoginContext = React.createContext<User>(defaultUser);
export const LoginContextConsumer = LoginContext.Consumer;

export function LoginContextProvider({children}: Props) {
    
   const [username,setUsername] = useState("");
   const [token,setToken] = useState(localStorage.getItem("token"));
   const [signedIn,setSignedIn] = useState(false);
   const [role,setRole] = useState(localStorage.getItem("role"));
   const currentUser:User = {username, setUsername ,token ,setToken, signedIn, setSignedIn, role, setRole };
    //localStorage.setItem("token",token);
   return (
        <LoginContext.Provider value={currentUser}>
            {children}
        </LoginContext.Provider>
    );

};
