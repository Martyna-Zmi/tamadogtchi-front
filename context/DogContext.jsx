import React, {createContext, useState} from "react";

export const DogContext = createContext();


export const AppProvider = ({ children }) => {
    const[dogs, setDogs] = useState([]);
    const[foods, setFoods] = useState([]);
    const[currentDog, setCurrentDog] = useState();
    const [isDisplayPlay, setIsDisplayPlay] = useState(true);

    function addDog(dog){
        setDogs([dog, ...dogs])
    }
    async function amuseDog(amout) {
        await fetch(`http://localhost:8080/dogs/amuse/${currentDog._id}/${amout}`,{
            method: 'PUT'
        })
            .then(response => response.json())
            .then(dog => {
                const temp = [...dogs];
                temp[temp.indexOf(currentDog)] = dog;
                setCurrentDog(dog);
                setDogs([...temp]);
            })
            .catch(()=>alert("Something went wrong... try once again please"))
    }
    async function feedDog(food) {
        await fetch(`http://localhost:8080/dogs/feed/${currentDog._id}/${food._id}`,{
            method: 'PUT'
        })
            .then(response => response.json())
            .then(dog => {
                const temp = [...dogs];
                temp[temp.indexOf(currentDog)] = dog;
                setCurrentDog(dog);
                setDogs([...temp]);
            })
            .catch(()=>alert("Something went wrong... try once again please"))
    }
    return (
        <DogContext.Provider value={{dogs, setDogs, addDog, amuseDog, feedDog, foods, setFoods, setCurrentDog, currentDog, isDisplayPlay, setIsDisplayPlay}}>
            {children}
        </DogContext.Provider>
    );
};