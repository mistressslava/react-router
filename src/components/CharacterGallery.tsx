import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import axios from "axios";
import {useEffect, useState} from "react";

/*type CharacterGalleryProps = {
    characters: Character[];
}*/

export default function CharacterGallery() {

    const [chars, setChars] = useState<Character[]>([]);

    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then((response) => {
                setChars(response.data.results);
                setMaxPage(response.data.info.pages)})
            .catch((e) => console.error(e))
    }, [page]);


    return (
        <>
            <div className="character-gallery">
                {chars.map((character) => <CharacterCard key={character.id} character={character}/>)}
            </div>
            <div>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>To the previous page</button>
                <button disabled={page === maxPage} onClick={() => setPage(page + 1)}>To the next page</button>
            </div>
        </>
    );
}
