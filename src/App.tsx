import './App.css'
import {Route, Routes} from "react-router-dom";
import Greeting from "./components/Greeting.tsx";
import CharacterList from "./components/CharacterList.tsx";
import Navbar from "./components/Navbar.tsx";

export default function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Greeting/>}/>
                <Route path={"data"} element={<CharacterList/>}/>
            </Routes>
        </>
    );
}
