import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { fetchApproveUser, fetchUnapprovedUsers } from "../service/userService";

export default function ApproveUser({sendDataToParent}) {
    const context = useContext(LoginContext);
    const [users,setUsers] = useState([]);
    

    async function approveUser (e: any,id: string, isApproved: Boolean) {
        e.preventDefault();
        let token = localStorage.getItem("token");
        id = e.target.elements.idString.value;
        isApproved = e.target.elements.isApproved.checked;
        console.log(isApproved)
        if (isApproved) {
            await fetchApproveUser(token!,id);
            let response = await fetchUnapprovedUsers(token!,10,1);
            sendDataToParent(response.users);

        }
        else {
            return;
        }        
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