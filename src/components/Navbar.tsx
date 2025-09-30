import {useNavigate} from "react-router-dom";

export default function Navbar() {

    const nav = useNavigate();

    return (
        <nav className="navbar">
            <button className="nav-btn" onClick={() => nav("/")}>Main page</button>
            <button className="nav-btn" onClick={() => nav("/home")}>Home</button>
            <button className="nav-btn" onClick={() => nav("/data")}>Your data</button>
        </nav>
    )
}