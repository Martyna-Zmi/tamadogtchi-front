import PlayOptions from "./PlayOptions.jsx";
import FoodOptions from "./FoodOptions.jsx";

export default function SideTabManager({displayPlay}){
    if(displayPlay){
        return (<PlayOptions/>)
    }
    return (<FoodOptions/>)
}