import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import axios from "axios";
import {useState} from "react";

type CharacterGalleryProps = {
    characters: Character[];
}

export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {
    const cards = props.characters.map((character) => <CharacterCard key={character.name} character={character}/>);

    const [chars, setChars] = useState<Character[]>([{
        id: 0,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: {
            name: "", url: ""

        },
        location: {
            name: "", url: ""
        },
        image: "",
        episode: [],
        url: "",
        created: ""
    }]);

    async function loadAllCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => setChars(response.data.results))
            .catch((error) => console.log(error));
    }

    return (
        <>
            <div className="character-gallery">
                {cards}
            </div>

            <div>
                {chars.map((char) => (
                    <p key={char.id}>{char.name}</p>
                ))}
            </div>


            <br/>
            <button onClick={loadAllCharacters}>Click me!</button>

        </>
    );
}
