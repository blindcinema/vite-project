
import { useContext } from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import {LoginContext} from './context/LoginContext';
import Dashboard from './pages/Dashboard';

function App() {

 const context = useContext(LoginContext);

  return (
    //todo register
    
      <>
    {!context.signedIn &&
    <div>
      <div>
         Login <Login/>
      </div>
      <div>
        Register <Register/> 
      </div>
    </div>} 
    {context.signedIn && <Dashboard/>}
    </>

    
  );
}

export default App;
