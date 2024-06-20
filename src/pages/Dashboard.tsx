
import { useContext, useState } from "react";
import GetAllUsers from "../component/GetAllUsers";
import Logout from "../component/Logout";
import { LoginContext } from "../context/LoginContext";
import GetUnapprovedUsers from "../component/GetUnapprovedUsers";
import ApproveUser from "../component/ApproveUser";

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
        

        {context.role !== "Admin" ? ` YOU are a ${context.role} todo add client methods ` : <div>
            

        <thead>
          <th>
          Name 
          </th>
          <th>
          Id
          </th>
          </thead>
          <tbody style={{}}>
          {users.map((user) => {
                return <>
                
                <tr key={user.id + user.name}>{user.name}  
                  <td key={user.id} style={{paddingLeft:"2rem"}}> {user.id} </td>
                  <td><input type="checkbox" id={user.id + "checkbox"}/></td>
                  </tr> 
                </>;
            })}

        </tbody>
             <GetAllUsers sendDataToParent={getChildUsers}/>
             <GetUnapprovedUsers sendDataToParent={getChildUsers}/>
             <ApproveUser/>
              </div>}
        

        <Logout/>
    </main>
  );
}

export default Dashboard;
