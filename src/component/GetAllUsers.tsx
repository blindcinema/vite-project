import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { fetchAllUsers } from "../service/userService";

export default function GetAllUsers({sendDataToParent}) {
    const context = useContext(LoginContext);
    const [users,setUsers] = useState([]);


    async function getUsers (e: any) {

        e.preventDefault();
        let token = localStorage.getItem("token");
        const response = await fetchAllUsers(token!);   
        //console.log(response)
        
        sendDataToParent(response);  
        
    }

    return (
        <>
        <button type="button" onClick={getUsers}>Get Users!</button>
        </>
    );
}