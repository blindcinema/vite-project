import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate();
    const context = useContext(LoginContext);
    function logout (e) {
        e.preventDefault();
        context.setToken(null);
        context.setUsername("");
        context.setSignedIn(false);
        localStorage.clear();
        navigate("/");
    }

    return (
        <button type="button" onClick={logout}>Log out</button>
    );
}