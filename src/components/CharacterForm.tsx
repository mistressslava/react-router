import {FormEvent, useState} from "react";

type CharacterFormProps = {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}


export default function CharacterForm() {

    const [character, setCharacter] = useState<CharacterFormProps>({
        name: "",
        status: "",
        species: "",
        gender: "",
        image: ""
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(character);
        alert("The character was saved!")
    }


    return (
        <>
            <form onSubmit={handleSubmit}>

                <div>
                    <label> Name:
                        <input
                            value={character.name}
                            onChange={(e) => setCharacter({...character, name: e.target.value})}
                            placeholder={"Enter the name of a character..."}
                        />
                    </label>
                </div>
                <div>
                    <label> Status:
                        <input
                            value={character.status}
                            onChange={(e) => setCharacter({...character, status: e.target.value})}
                            placeholder={"Enter the status of a character..."}
                        />
                    </label>
                </div>
                <div>
                    <label> Species:
                        <input
                            value={character.species}
                            onChange={(e) => setCharacter({...character, species: e.target.value})}
                            placeholder={"Enter the status of a character..."}
                        />
                    </label>
                </div>
                <div>
                    <label> Gender:
                        <input
                            value={character.gender}
                            onChange={(e) => setCharacter({...character, gender: e.target.value})}
                            placeholder={"Enter the status of a character..."}
                        />
                    </label>

                </div>
                <div>
                    <label> Image:
                        <input
                            value={character.image}
                            onChange={(e) => setCharacter({...character, image: e.target.value})}
                            placeholder={"Enter the link on a photo of a character..."}
                        />
                    </label>
                </div>
                <button type={"submit"}>Send</button>
            </form>
        </>
    )
}