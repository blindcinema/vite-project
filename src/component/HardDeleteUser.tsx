import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { fetchAllUsers, hardDeleteUser } from "../service/userService";

export default function HardDeleteUser({sendDataToParent}) {
    const context = useContext(LoginContext);
    const [users,setUsers] = useState([]);
    

    async function deleteUserHard (e: any,id: string) {
        e.preventDefault();
        let token = localStorage.getItem("token");
        id = e.target.elements.idString.value;

         await hardDeleteUser(token!,id);

            let response = await fetchAllUsers(token!);
            //console.log(response)
            sendDataToParent(response);
    }

    return (
        <>
        <form onSubmit={deleteUserHard}>
            <label htmlFor="idString">User Id </label>
            <input type="text" name="idString" id="idString"></input>
        <button type="submit"> HARD CAN NOT BE UNDONE Delete User</button>
        </form>
        </>
    );
}