import ProgressBar from "./ProgressBar.jsx";

export default function DogStats(){
    return (
        <div className="p-4 m-4 w-fit" style={{"backgroundColor": "rgba(143, 52, 247, 0.8)"}}>
            <p className="text-text-primary text-2xl font-extrabold py-3">Dog Name</p>

            <p className="text-text-primary text-xl font-extrabold py-1">Stats</p>
            <ProgressBar value={0.5} max={1} label="Hunger"/>
            <ProgressBar value={0.5} max={1} label="Happiness"/>

            <p className="text-text-primary text-xl font-extrabold py-2">Liked foods</p>
            <p className="text-text-secondary text-xl">item 1</p>
            <p className="text-text-secondary text-xl">item 2</p>
            <p className="text-text-secondary text-xl">item 3</p>

            <p className="text-text-primary text-xl font-extrabold py-2">Birthday</p>
            <p className="text-text-secondary text-xl">12.04.2025</p>

            <p className="text-text-primary text-xl font-extrabold py-2">TamaDog Variant</p>
            <p className="text-text-secondary text-xl">Galaxy</p>
        </div>
    )
}