import DogStats from "../components/DogStats.jsx";
import DogButton from "../components/DogButton.jsx";
import PlayOptions from "../components/PlayOptions.jsx";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        document.title = "Tamadogtchi";
    }, []);
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
                          className="text-2xl w-1/2 border-r-1 border-purple-300 text-text-primary p-2 m-0 bg-violet-700 hover:bg-violet-500">
                          Feed
                      </button>
                      <button
                          className="text-2xl w-1/2 border-purple-300 text-text-primary p-2 m-0 bg-violet-700 hover:bg-violet-500">
                          Play
                      </button>
                  </div>
                  <div>
                      <PlayOptions/>
                  </div>
              </aside>

              {/* Main Container */}
              <main className="flex-1 flex flex-col bg-main">
                  {/* Footer within Main Container */}
                  <div className="flex-1 flex flex-row ml-5">
                      <DogStats/>
                      <div>
                          <img alt="A magical tamadog" src="/public/var4.png" width="900px" height="auto"/>
                      </div>
                  </div>
                  <footer className="bg-footer p-4 text-center m-0 flex flex-row justify-center">
                      <DogButton dog={true}/>
                      <DogButton dog={false}/>
                      <DogButton dog={false}/>
                  </footer>
              </main>
          </div>
      </div>
  )
}

export default App
