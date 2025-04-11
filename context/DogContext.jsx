import React, {createContext, useState} from "react";

export const DogContext = createContext();

//TODO add states and functions for playing and feeding the dog
export const AppProvider = ({ children }) => {
    const[dogs, setDogs] = useState([]);
    const[foods, setFoods] = useState([]);
    const[currentDog, setCurrentDog] = useState();
    const [isDisplayPlay, setIsDisplayPlay] = useState(true);

    function addDog(dog){
        setDogs([dog, ...dogs])
    }
    return (
        <DogContext.Provider value={{dogs, setDogs, addDog, foods, setFoods, setCurrentDog, currentDog, isDisplayPlay, setIsDisplayPlay}}>
            {children}
        </DogContext.Provider>
    );
};