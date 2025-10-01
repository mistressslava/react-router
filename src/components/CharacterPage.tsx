import {useEffect, useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";
import axios from "axios";
import CharacterSearch from "./CharacterSearch.tsx";
import "./CharacterGallery.css";
import CharacterGallery from "./CharacterGallery.tsx";


export default function CharacterPage() {
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character", {
            params: {page, name: searchText}
        })
            .then((res) => {
                setCharacters(res.data.results);
                setTotalPages(res.data.info.pages);
            })
            .catch(() => {
                setCharacters([])
                setPage(1)
                setError("No character found")
            })
    }, [page, searchText]);

    return (
        <>
            <CharacterSearch value={searchText} onChange={setSearchText}/>

            <div>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>To the previous page</button>
                <span>{page} / {totalPages}</span>
                <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>To the next page</button>

                {characters.length === 0 ?
                    <p>{error}</p> :
                    <CharacterGallery characters={characters}/>}
            </div>
        </>
    )
}