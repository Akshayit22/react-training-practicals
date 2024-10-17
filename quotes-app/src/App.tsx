import { RouterProvider } from "react-router-dom";
import { Router } from "./common/Router";
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
    }

    return (
        <div className={`relative top-0 bg-white dark:bg-black transition-colors duration-500 ease-in-out delay-300`}>
            <RouterProvider router={Router}>
            </RouterProvider>
            <button className="absolute z-10 bottom-10 right-10 w-12 h-12 text-4xl flex items-center justify-center rounded-full font-semibold bg-black dark:bg-white text-white dark:text-black" onClick={toggleTheme} name="dark-mode">
                {
                    darkMode ? <CiLight /> : <MdDarkMode />
                }
            </button>
        </div>
    );
}

export default App;
