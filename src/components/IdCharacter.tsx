import {useParams} from "react-router-dom";
import {characters} from "../Characters.ts";
import CharacterCard from "./CharacterCard.tsx";
import {Character} from "../types/RickAndMortyCharacter.ts";


export default function IdCharacter() {

    const param = useParams();

    function getCharacterById(id: string | undefined): Character | undefined {
        const numId = Number(id);
        if (Number.isNaN(numId)) return undefined;

        return characters.find((ch) => ch.id === numId);
    }

    const character = getCharacterById(param.id);

    return (
        <>
            <h2>Hello, welcome to a page: {param.id}</h2>
            {
                character ? (
                    <CharacterCard character={character}/>
                ) : (
                    <p>Character not found</p>
                )
            }
        </>
    )
}