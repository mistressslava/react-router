import React from "react";
import {useNavigate} from "react-router-dom";

type ChangeByIdProps = {
    customId: string;
    setCustomId: (id: string) => void;
}

export default function ChangeIdURL(props: Readonly<ChangeByIdProps>) {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (props.customId.trim()) {
            navigate(`/characters/${props.customId}`)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    placeholder={"Enter character id.."}
                    value={props.customId}
                    onChange={e =>
                        props.setCustomId(e.target.value)}
                />
                <button type={"submit"}>Go</button>
            </form>

        </>
    )
}