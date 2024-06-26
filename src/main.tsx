import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LoginContextProvider } from './context/LoginContext.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Dashboard from './pages/Dashboard.tsx'


// TODO ADD CONTEXT

//const currentUser = useContext(LoginContext);
const router = createBrowserRouter([{
  path: "/",
  element: <App/>
},{
  path: "/login",
  element: <Login/>
}, {
  path: "/register",
  element:<Register/>
},{
  path: "/dashboard",
  element:<Dashboard/>
}

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginContextProvider>
    <RouterProvider router={router} />
    </LoginContextProvider>
  </React.StrictMode>,
)
