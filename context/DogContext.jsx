import React, {createContext, useState} from "react";

export const DogContext = createContext();

export const AppProvider = ({ children }) => {
    const[dogs, setDogs] = useState([]);

    function addDog(dog){
        setDogs([dog, ...dogs])
    }
    return (
        <DogContext.Provider value={{dogs, setDogs ,addDog}}>
            {children}
        </DogContext.Provider>
    );
};