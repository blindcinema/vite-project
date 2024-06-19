import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

export default function GetAllUsers({sendDataToParent}) {
    const context = useContext(LoginContext);
    const [users,setUsers] = useState([]);
    const fetchAllUsers = async (token: string) => {
         return await fetch('https://localhost:7274/api/User/get-all-users', {
            method: 'GET',
            mode: 'cors',
            headers : { 'Content-type' : 'application/json', 'Accept' : 'text/json', 'Authorization': `bearer ${token}`},
            
          }).then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error(`HTTP error, status: = ${response.status}`);
            }
            
          }).catch(response => {
            console.log(response);
          })

          
    } 

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