import './App.css'
import {Route, Routes} from "react-router-dom";
import Greeting from "./components/Greeting.tsx";
import CharacterList from "./components/CharacterList.tsx";
import Navbar from "./components/Navbar.tsx";
import IdCharacter from "./components/IdCharacter.tsx";
import ChangeIdURL from "./components/ChangeIdURL.tsx";
import {useState} from "react";

export default function App() {

    const [customId, setCustomId] = useState("");

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Greeting/>}/>
                <Route path={"/characters"} element={<CharacterList/>}/>
                <Route path={"/characters/:id"} element={<IdCharacter/>}/>
                <Route path={"/character/id"} element={<ChangeIdURL customId={customId} setCustomId={setCustomId}/>}/>
            </Routes>
        </>
    );
}
