import { useNavigate } from "react-router-dom"

export default function HomeButton() {
    const navigate = useNavigate();
    const goHome = ()=> {
        navigate("/")
    }
    return (
        <button onClick={goHome}>Home</button>
    )
}