
import { useContext, useState } from "react";
import GetAllUsers from "../component/GetAllUsers";
import Logout from "../component/Logout";
import { LoginContext } from "../context/LoginContext";
import GetUnapprovedUsers from "../component/GetUnapprovedUsers";

function Dashboard(props: any) {
    const context = useContext(LoginContext);
    const [debug,setDebug] = useState("DEBUG");
    const [users,setUsers] = useState([]);
    function getChildUsers(users) {
        setUsers(users);
    }
  return (
    <main>
        DASHBOARD 
        <div>{context.role}</div>
        <ol id="userList">
        {users.map((user) => {
                return <li key={user.id}>{user.name}</li>;
            })}
        </ol>
        {context.role != "Admin" ? " YOURE NOT ADMIN!!! " : <div>
            
             <GetAllUsers sendDataToParent={getChildUsers}/>
             <GetUnapprovedUsers sendDataToParent={getChildUsers}/>
              </div>}
        

        <Logout/>
    </main>
  );
}

export default Dashboard;
