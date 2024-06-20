
import { useContext, useEffect, useState } from 'react';
import {LoginContext} from '../context/LoginContext';

function Login() {
  let context = useContext(LoginContext);
  const [login,setLogin] = useState({userName:"",password:""});
  const [loginToken,setLoginToken] = useState("");

  const fetchLogin = async (username: string, password: string) => {
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

function submitForm(e) {
  e.preventDefault();
  fetchLogin(login.userName,login.password);
}

 useEffect( ()=> {
  if (context.token !== null) {
    let token = localStorage.getItem("token"); 
    context.setSignedIn(true);
    //console.log(token);

  }
  //console.log(login);

 },[])

  return (
    <main>
      <form onSubmit={submitForm} method='POST' id='login-form'>
        <label htmlFor="username">User Name </label>
        <input type='text' onChange={ e => setLogin({...login, userName: e.target.value})}
         name='username' id='username'>
        </input>
        <label htmlFor="password">Password </label>
        <input type='password'onChange={ e => setLogin({...login, password: e.target.value})}
         name='password' id='password'>
        </input>
        <button>Submit</button>
      </form>
      <div>
        {/*loginToken ? "Your token: "  +  loginToken : <></>
        */}
        

      </div>

    </main>
  );
}

export default Login;
