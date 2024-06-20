import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { fetchUnapprovedUsers } from "../service/userService";
export default function GetUnapprovedUsers({sendDataToParent}) {
    const context = useContext(LoginContext);
    const [users,setUsers] = useState([]);
    async function getUnapprovedUsers (e: any,pageSize:number,pageNumber:number) {
        e.preventDefault();
        pageSize = e.target.elements.pageSize.value;
        pageNumber = e.target.elements.pageNumber.value;
        let token = localStorage.getItem("token");
        const response = await fetchUnapprovedUsers(token!,pageSize,pageNumber);   
        setUsers(response.users);  
        sendDataToParent(response.users);  
        
    }

    return (
        <>
        <form onSubmit={getUnapprovedUsers}>
            <label htmlFor="pageSize">Page Size </label>
            <input type="number" name="pageSize" id="pageSize" defaultValue={10}></input>
            <label htmlFor="pageNumber">Page Number </label>
            <input type="number" name="pageNumber" id="pageNumber"defaultValue={1}></input>
        <button type="submit">Get Unapproved Users!</button>
        </form>
        </>
    );
}