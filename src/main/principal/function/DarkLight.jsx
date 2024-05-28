import {  useEffect } from "react";

export default function DarkLight({darkMode, setDarkMode}) {
    useEffect(() => {
      const isDarkMode = localStorage.getItem("darkMode") === "true";
      setDarkMode(isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", newMode);
      };
 
      
    return (
      <div className="modo-oscuro" onClick={toggleDarkMode}>
        <div className="info">
          <span>Modo Oscuro</span>
        </div>
        <div className="switch">
          <div className={`base ${darkMode ? "dark-mode" : ""}`}>
              <div className={`circulo ${darkMode ? "prendido" : ""}`}></div>
          </div>
        </div>
      </div>
    )
}
