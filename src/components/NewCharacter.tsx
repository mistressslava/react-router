import {useState} from "react";

type NewCharacterProps = {
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}


export default function NewCharacter() {

        const [character, setCharacter] = useState<NewCharacterProps>({
            name: "",
            status: "",
            species: "",
            gender: "",
            image: ""
        });

    return (
        <>
            <div>
                <form>
                    <label> Name:
                        <input
                            value={character.name}
                            onChange={(e) => setCharacter({...character, name: e.target.value})}
                               placeholder={"Enter the name of a character..."}
                        />
                    </label>
                </form>
            </div>
            <div>
                <form>
                    <label> Status:
                        <input
                            value={character.status}
                            onChange={(e) => setCharacter({...character, status: e.target.value})}
                               placeholder={"Enter the status of a character..."}
                        />
                    </label>
                </form>
            </div>
            <div>
                <form>
                    <label> Gender:
                        <input
                            value={character.gender}
                            onChange={(e) => setCharacter({...character, gender: e.target.value})}
                               placeholder={"Enter the status of a character..."}
                        />
                    </label>
                </form>

            </div>
            <div>
                <form>
                    <label> Image:
                        <input
                            value={character.image}
                            onChange={(e) => setCharacter({...character, image: e.target.value})}
                               placeholder={"Enter the link on a photo of a character..."}
                        />
                    </label>
                </form>
            </div>
        </>
    )
}