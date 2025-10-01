/*

    Here is a form for creating new character
    -------------------------------------------

    Form to create a new character (local-only)
    Rick & Morty API does NOT allow POST, so we simulate locally.

*/


import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

type NewCharacterForm = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string,
    image: string
};


export default function CharacterForm() {

    const navigate = useNavigate();

    const [characters, setCharacters] = useState<NewCharacterForm[]>([]);

    const [newCharacter, setNewCharacter] = useState<NewCharacterForm>({
        id: 0,
        name: "",
        status: "",
        species: "",
        gender: "",
        image: ""
    });

    const [counter, setCounter] = useState(1000); // counter for id

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        axios.post("https://rickandmortyapi.com/api/character", newCharacter)
            .then((response) => console.log("POST response (ignored): ", response.status))
            .catch((error) => console.log(error));


        const fakeChar: NewCharacterForm = {
            ...newCharacter,
            id: counter
        };

        setCharacters((prev) => [...prev, fakeChar]);
        setCounter((prev) => prev + 1)

        setNewCharacter({
            id: 0,
            name: "",
            status: "",
            species: "",
            gender: "",
            image: "",
        })

        console.log(newCharacter);
        alert("The character was saved!");

        navigate("/characters", { state: { characters: [...characters, fakeChar] } });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div>
                    <label> Name:
                        <input
                            value={newCharacter.name}
                            onChange={(e) => setNewCharacter({...newCharacter, name: e.target.value})}
                            placeholder={"Enter the name of a character..."}
                        />
                    </label>
                </div>
                <div>
                    <label> Status:
                        <input
                            value={newCharacter.status}
                            onChange={(e) => setNewCharacter({...newCharacter, status: e.target.value})}
                            placeholder={"Enter the status of a character..."}
                        />
                    </label>
                </div>
                <div>
                    <label> Species:
                        <input
                            value={newCharacter.species}
                            onChange={(e) => setNewCharacter({...newCharacter, species: e.target.value})}
                            placeholder={"Enter the status of a character..."}
                        />
                    </label>
                </div>
                <div>
                    <label> Gender:
                        <input
                            value={newCharacter.gender}
                            onChange={(e) => setNewCharacter({...newCharacter, gender: e.target.value})}
                            placeholder={"Enter the status of a character..."}
                        />
                    </label>

                </div>
                <div>
                    <label> Image:
                        <input
                            value={newCharacter.image}
                            onChange={(e) => setNewCharacter({...newCharacter, image: e.target.value})}
                            placeholder={"Enter the link on a photo of a character..."}
                            type={"url"}
                        />
                    </label>
                </div>
                <button type={"submit"}>Send</button>
            </form>
        </>
    )
}