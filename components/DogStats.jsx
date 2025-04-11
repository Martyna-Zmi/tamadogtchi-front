import ProgressBar from "./ProgressBar.jsx";
import {useContext} from "react";
import {DogContext} from "../context/DogContext.jsx";

export default function DogStats(){
    const {currentDog} = useContext(DogContext);
    if(currentDog){
        return (
            <div className="p-4 m-4 w-fit" style={{"backgroundColor": "rgba(143, 52, 247, 0.8)"}}>
                <p className="text-text-primary text-2xl font-extrabold py-3">{currentDog.name}</p>

                <p className="text-text-primary text-xl font-extrabold py-1">Stats</p>
                <ProgressBar value={currentDog.currentHunger} max={currentDog.maxHunger} label="Hunger"/>
                <ProgressBar value={currentDog.currentHappiness} max={currentDog.maxHappiness} label="Happiness"/>

                <p className="text-text-primary text-xl font-extrabold py-2">Liked foods</p>
                <p className="text-text-secondary text-xl">{(currentDog.likedFoods.length > 0) ? "" : "None yet"}</p>
                <p className="text-text-secondary text-xl">{currentDog.likedFoods[0]}</p>
                <p className="text-text-secondary text-xl">{currentDog.likedFoods[1]}</p>
                <p className="text-text-secondary text-xl">{currentDog.likedFoods[2]}</p>

                <p className="text-text-primary text-xl font-extrabold py-2">Birthday</p>
                <p className="text-text-secondary text-xl">{currentDog.birthDate.split('T')[0]}</p>

                <p className="text-text-primary text-xl font-extrabold py-2">TamaDog Variant</p>
                <p className="text-text-secondary text-xl">{variantToStr(currentDog.variant)}</p>
            </div>
        )
    }

}

function variantToStr(variant) {
    switch (variant) {
        case 1:
            return "Flame";
        case 2:
            return "Lush";
        case 3:
            return "Beach";
        case 4:
            return "Galaxy";
        default:
            return "Unknown";
    }
}