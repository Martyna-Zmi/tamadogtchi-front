import {useContext} from "react";
import {DogContext} from "../context/DogContext.jsx";

export default function DogButton({dog}){
    const { setCurrentDog } = useContext(DogContext);
    if(dog){
        return(
            <div className="h-fit mx-5">
                <button
                    className="border-1 border-purple-800 rounded-2xl p-4 bg-violet-700 hover:bg-violet-500 hover:scale-110"
                onClick={()=>setCurrentDog(dog)}>
                    &#128062;
                </button>
            </div>
        )
    }
    return (
        <div className="h-fit mx-5">
            <button
                className="border-1 border-purple-800 rounded-2xl p-4 bg-violet-700 hover:bg-violet-500 hover:scale-110">
                &#10133;
            </button>
        </div>
    )
}