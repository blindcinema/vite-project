import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Logout() {
    const context = useContext(LoginContext);
    function logout (e) {
        e.preventDefault();
        context.setToken(null);
        context.setUsername("");
        context.setSignedIn(false);
        localStorage.clear();
        console.log(context)
    }

    return (
        <button type="button" onClick={logout}>Log out</button>
    );
}