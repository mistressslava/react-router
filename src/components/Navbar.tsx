import {useNavigate} from "react-router-dom";

export default function Navbar() {

    const nav = useNavigate();

    return (
        <header>
            <nav className="navbar">
                <button className="nav-btn" onClick={() => nav("/")}>Main page</button>
                <button className="nav-btn" onClick={() => nav("/characters")}>Your data</button>
                <button className="nav-btn" onClick={() => nav("/character/id")}>Find character by ID</button>
            </nav>
        </header>
    )
}