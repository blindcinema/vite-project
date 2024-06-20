//TODO make methods here


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
function login() {}
function register() {}

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
function softDeleteUser() {}
function hardDeleteUser() {}
function editUser() {}
function changeClientRole() {}
