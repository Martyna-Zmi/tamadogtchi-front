import {useContext} from "react";
import {DogContext} from "../context/DogContext.jsx";

const buttonStyle = "w-full my-1 text-text-primary border-1 border-purple-800 rounded-2xl p-4 bg-violet-700 hover:bg-violet-900";

export default function FoodOptions(){
    const {foods} = useContext(DogContext);
    if(foods){
        return(
            <div className="flex flex-col flex-wrap justify-center">
                {foods.map((food, key) => {
                    return (
                        <div key={key}>
                            <button className={buttonStyle}>{food.name}</button>
                        </div>
                    )
                })}
            </div>
        )
    }

}