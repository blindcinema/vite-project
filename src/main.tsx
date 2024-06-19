import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LoginContextProvider } from './context/LoginContext.tsx'


// TODO ADD CONTEXT

//const currentUser = useContext(LoginContext);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginContextProvider>
    <App />

    </LoginContextProvider>
  </React.StrictMode>,
)
