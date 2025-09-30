import './App.css'
import {Route, Routes} from "react-router-dom";
import Greeting from "./components/Greeting.tsx";
import CharacterList from "./components/CharacterList.tsx";
import Navbar from "./components/Navbar.tsx";
import IdCharacter from "./components/IdCharacter.tsx";
import ChangeIdURL from "./components/ChangeIdURL.tsx";
import CharacterForm from "./components/CharacterForm.tsx";

export default function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Greeting/>}/>
                <Route path={"/characters"} element={<CharacterList/>}/>
                <Route path={"/characters/:id"} element={<IdCharacter/>}/>
                <Route path={"/character/id"} element={<ChangeIdURL/>}/>
                <Route path={"/character/creating-new-character"} element={<CharacterForm/>}/>
            </Routes>
        </>
    );
}
