
import {LoginContext} from '../context/LoginContext';
import { useContext } from 'react';
import { redirect } from 'react-router-dom';
import HeroText from '../component/HeroText';

export default function HomePage() {
    
 const context = useContext(LoginContext);

return (
    <main>
        <HeroText/>

    <div className="login-container">
    {!context.signedIn &&
    <div>
      <div>
        
         <a href='/login'>Login</a>
          
      </div>
      <div>
      <a href='/register'>Register</a> 
      </div>
    </div>
    } 
    </div>
    </main>
)
};
