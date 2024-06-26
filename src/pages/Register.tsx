
import { useContext, useEffect, useState } from 'react';
import {LoginContext} from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import HomeButton from '../component/HomeButton';

function Register() {
  const navigate = useNavigate();
  let context = useContext(LoginContext);
  const [register,setRegister] = useState({userName:"",password:"", name:"", email:""});
  const [loginToken,setLoginToken] = useState("");

  const fetchRegister = async (username: string, password: string,name: string,email: string) => {
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

async function submitForm(e: any) {
  e.preventDefault();
  await fetchRegister(register.userName,register.password,register.name,register.email);
  if (context.signedIn) {
    navigate("/dashboard");
  }
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
      <div>
        <HomeButton/>
      </div>
      <form onSubmit={submitForm} method='POST' id='login-form'>
        <label htmlFor="username">User Name </label>
        <input type='text' onChange={ e => setRegister({...register, userName: e.target.value})}
         name='username' id='username'>
        </input>
        <label htmlFor="name">Name </label>
        <input type='text' onChange={ e => setRegister({...register, name: e.target.value})}
         name='name' id='name'>
        </input>
        <label htmlFor="email">Email </label>
        <input type='email' onChange={ e => setRegister({...register, email: e.target.value})}
         name='email' id='email'>
        </input>
        <label htmlFor="password">Password </label>
        <input type='password'onChange={ e => setRegister({...register, password: e.target.value})}
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

export default Register;
