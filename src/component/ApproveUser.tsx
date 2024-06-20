import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

export default function ApproveUser({sendDataToParent}) {
    const context = useContext(LoginContext);
    const [users,setUsers] = useState([]);
    const fetchApproveUser = async (token: string,id: string, isApproved: Boolean) => {
         return await fetch(`https://localhost:7274/api/User/approve-user/${id}`, {
            method: 'PUT',
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

    async function approveUser (e: any,id: string, isApproved: Boolean) {
        e.preventDefault();
        id = e.target.elements.idString.value;
        isApproved = e.target.elements.isApproved.value;
        let token = localStorage.getItem("token");
        await fetchApproveUser(token!,id, isApproved);   
        //console.log(response.users);  
        //sendDataToParent(response.users);  
        
    }

    return (
        <>
        <form onSubmit={approveUser}>
            <label htmlFor="idString">User Id </label>
            <input type="text" name="idString" id="idString"></input>
            <label htmlFor="isApproved">Do you approve this user </label>
            <input type="checkbox" name="isApproved" id="isApproved"></input>
        <button type="submit">Approve user</button>
        </form>
        </>
    );
}