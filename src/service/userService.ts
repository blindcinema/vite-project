//TODO make methods here

import axios from "axios";


 export const fetchAllUsers = async (token: string) => {
    return await fetch('https://localhost:7274/api/User/get-all-users', {
       method: 'GET',
       mode: 'cors',
       headers : { 'Content-type' : 'application/json', 'Accept' : 'text/json', 'Authorization': `bearer ${token}`}
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
} ;

export function getUserById() {};

export const fetchUnapprovedUsers = async (token: string,pageSize: number, pageNumber: number) => {
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
export const fetchLogin = async (username: string, password: string) => {
  const response = await fetch('https://localhost:7274/api/User/login', {
    method: 'POST',
    mode: 'cors',
    headers : { 'Content-type' : 'application/json', 'Accept' : 'text/json'},
    body: JSON.stringify({username,password}),
  }).then(response => {
    if (!response.ok) {
      alert("Bad username or password")
      throw new Error(`HTTP error, status: = ${response.status}`);
    }
    else { 
      return response.json();
    }
  }
  ).then(res => {
    
    const json = res;
    context.setRole(json.role);
    context.setToken(json.token);
    context.setUsername(json.userName);
    context.setSignedIn(true);
    localStorage.setItem("token",json.token);
    localStorage.setItem("role",json.role);
  }).catch(response => {
    console.log(response);
  });
};
export const fetchRegister = async (username: string, password: string,name: string,email: string) => {
  const response = await fetch('https://localhost:7274/api/User/register', {
    method: 'POST',
    mode: 'cors',
    headers : { 'Content-type' : 'application/json', 'Accept' : 'text/json'},
    body: JSON.stringify({username,password,name,email}),
  }).then(response => {
    if (!response.ok) {
      alert("Bad username or password")
      throw new Error(`HTTP error, status: = ${response.status}`);
    }
    else { 
      return response.json();
    }
  }
  ).then(res => {
    
    const json = res;
    context.setRole("Client");
    context.setToken(json.token);
    context.setUsername(json.userName);
    context.setSignedIn(true);
    localStorage.setItem("token",json.token);
  }).catch(response => {
    console.log(response);
  });
};

export const fetchApproveUser = async (token: string,id: string) => {
    return await fetch(`https://localhost:7274/api/User/approve-user/${id}`, {
       method: 'PUT',
       mode: 'cors',
       headers : { 'Content-type' : 'application/json', 'Accept' : 'text/json', 'Authorization': `bearer ${token}`}    
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

// do axios
export const softDeleteUser = async (token:string, id: string) => {
try
{  return await axios.post(`https://localhost:7274/api/User/soft-delete-user?id=${id}`, {
    id: id,

  }, {headers: { 'Content-type' : 'application/json', 'Accept' : 'text/json', 'Authorization': `bearer ${token}`} }
).then(response => {return response}

)}
  catch (error) {
    console.log(error);
  }

}



export const hardDeleteUser = async (token:string, id: string) => {
  try
  {  return await axios.post(`https://localhost:7274/api/User/hard-delete-user?id=${id}`, {
      id: id,
  
    }, {headers: { 'Content-type' : 'application/json', 'Accept' : 'text/json', 'Authorization': `bearer ${token}`} }
  ).then(response => {return response}
  
  )}
    catch (error) {
      console.log(error);
    }
  
  }

function editUser() {}
function changeClientRole() {}
