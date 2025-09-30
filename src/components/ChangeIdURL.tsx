import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ChangeIdURL() {

    const [customId, setCustomId] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (customId.trim()) {
            navigate(`/characters/${customId}`)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"Enter character id.."}
                    value={customId}
                    onChange={e =>
                        setCustomId(e.target.value)}
                />
                <button type={"submit"}>Go</button>
            </form>

        </>
    )
}