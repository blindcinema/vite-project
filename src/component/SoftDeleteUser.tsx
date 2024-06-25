import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { fetchAllUsers, fetchApproveUser, fetchUnapprovedUsers, softDeleteUser } from "../service/userService";

export default function SoftDeleteUser({sendDataToParent}) {
    const context = useContext(LoginContext);
    const [users,setUsers] = useState([]);
    

    async function deleteUserSoft (e: any,id: string) {
        e.preventDefault();
        let token = localStorage.getItem("token");
        id = e.target.elements.idString.value;

         await softDeleteUser(token!,id);

            let response = await fetchAllUsers(token!);
            //console.log(response)
            sendDataToParent(response);
    }

    return (
        <>
        <form onSubmit={deleteUserSoft}>
            <label htmlFor="idString">User Id </label>
            <input type="text" name="idString" id="idString"></input>
        <button type="submit">Soft Delete User</button>
        </form>
        </>
    );
}