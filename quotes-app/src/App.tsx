import { RouterProvider } from "react-router-dom";
import { Router } from "./components/Router";
import { useState } from "react";

function App() {
    const [darkMode,setDarkMode] = useState(false);

    const toggleTheme = () =>{
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
    }

    return (
        <div className={`relative top-0 bg-white dark:bg-black`}>
            <RouterProvider router={Router}>
            </RouterProvider>
            <button className="absolute z-10 bottom-10 right-10 w-12 h-12 rounded-full font-semibold bg-black dark:bg-white text-white dark:text-black" onClick={toggleTheme}>
                    {
                        darkMode ? "LHT" : "DRK"
                    }
            </button>
        </div>
    );
}

export default App;
