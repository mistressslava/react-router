type CharacterSearchProps = {
    value: string;
    onChange: (value: string) => void;
}


export default function CharacterSearch(props: Readonly<CharacterSearchProps>) {

    return (
        <>
            <input value={props.value} onChange={(e) => props.onChange(e.target.value)}
                   placeholder={"Search by name..."}
            />
        </>

    )
}
