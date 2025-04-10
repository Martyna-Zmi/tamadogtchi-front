import {useContext, useEffect} from "react";
import {DogContext} from "../context/DogContext.jsx";

export default function ShowDogs(){
    const { dogs, setDogs } = useContext(DogContext);
    useEffect(() => {
        fetch("http://localhost:8080/dogs")
            .then(response => response.json())
            .then(data => setDogs(data))
            .catch(()=>console.log("error while fetching dogs data!"));
    },[])
    if(dogs){
        console.log(dogs);
        return (
            <>
                <p>Loaded!</p>
            </>
        )
    }
    return (
        <>
            <p>Loading...</p>
        </>
    )

}