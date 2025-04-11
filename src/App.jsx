import DogStats from "../components/DogStats.jsx";
import DogButton from "../components/DogButton.jsx";
import {useContext, useEffect, useState} from "react";
import {DogContext} from "../context/DogContext.jsx";
import SideTabManager from "../components/SideTabManager.jsx";
import DogImage from "../components/DogImage.jsx";

function App() {
    const { dogs, setDogs, setFoods, setCurrentDog, currentDog, isDisplayPlay, setIsDisplayPlay } = useContext(DogContext);
    const [error, setError] = useState(null);
    //const [isFirstLoad, setIsFirstLoad] = useState(true);
    useEffect(() => {
        document.title = "Tamadogtchi";
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/dogs")
            .then(response => response.json())
            .then(data => {
                setDogs(data);
                setCurrentDog(data[0]);
            })
            .catch(()=>setError("couldn't load dogs"));
    },[]);

    useEffect(() => {
        fetch("http://localhost:8080/foods")
            .then(response => response.json())
            .then(data => setFoods(data))
            .catch(()=>setError("couldn't load foods"));
    },[]);
    // useEffect(() => {
    //     setCurrentDog(dogs[0])
    // }, [dogs]);
  return (
      <div className="h-screen flex flex-col">
          {/* Topbar */}
          <header className="w-full bg-violet-600 text-white p-4 text-center">
              <h3 className="text-2xl font-extrabold">Tamadogtchi</h3>
          </header>

          {/* Main Content */}
          <div className="flex flex-1">
              {/* Sidebar */}
              <aside className="w-1/5 bg-topbar">
                  <div>
                      <button
                          onClick={()=>setIsDisplayPlay(false)}
                          className="text-2xl w-1/2 border-r-1 border-purple-300 text-text-primary p-2 m-0 bg-violet-700 hover:bg-violet-500">
                          Feed
                      </button>
                      <button
                          onClick={()=>setIsDisplayPlay(true)}
                          className="text-2xl w-1/2 border-purple-300 text-text-primary p-2 m-0 bg-violet-700 hover:bg-violet-500">
                          Play
                      </button>
                  </div>
                  <div>
                      <SideTabManager displayPlay={isDisplayPlay}/>
                  </div>
              </aside>

              {/* Main Container */}
              <main className="flex-1 flex flex-col bg-main">
                  {/* Footer within Main Container */}
                  <p>{error}</p>
                  <div className="flex-1 flex flex-row ml-5">
                      <DogStats/>
                      <div>
                          <DogImage dog={currentDog}/>

                      </div>
                  </div>
                  <footer className="bg-footer p-4 text-center m-0 flex flex-row justify-center">
                      <DogButton dog={dogs[0]}/>
                      <DogButton dog={dogs[1]}/>
                      <DogButton dog={dogs[2]}/>
                  </footer>
              </main>
          </div>
      </div>
  )
}

export default App

