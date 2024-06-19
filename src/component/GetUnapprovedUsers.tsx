import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

export default function GetUnapprovedUsers({sendDataToParent}) {
    const context = useContext(LoginContext);
    const [users,setUsers] = useState([]);
    const fetchUnapprovedUsers = async (token: string,pageSize: number, pageNumber: number) => {
         return await fetch(`https://localhost:7274/api/User/unapproved-users?pageSize=${pageSize}&pageNumber=${pageNumber}`, {
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

    async function getUnapprovedUsers (e: any,pageSize:number,pageNumber:number) {
        e.preventDefault();
        pageSize = e.target.elements.pageSize.value;
        pageNumber = e.target.elements.pageNumber.value;
        let token = localStorage.getItem("token");
        const response = await fetchUnapprovedUsers(token!,pageSize,pageNumber);   
        //console.log(response.users);  
        sendDataToParent(response.users);  
        
    }

    return (
        <>
        <form onSubmit={getUnapprovedUsers}>
            <label htmlFor="pageSize">Page Size </label>
            <input type="number" name="pageSize" id="pageSize"></input>
            <label htmlFor="pageNumber">Page Number </label>
            <input type="number" name="pageNumber" id="pageNumber"></input>
        <button type="submit">Get Unapproved Users!</button>
        </form>
        </>
    );
}