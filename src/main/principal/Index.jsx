import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
// import { Route, Routes, Link, useLocation } from "react-router-dom";
import Iframe from "react-iframe";

import LinksNabvar from '../../conexiones/links/links'  
import DarkLight from "./function/DarkLight"
import Translation from "./function/Translation";
import MiniNavbar from "./function/MiniNavbar";

import Buscador from "./component/Buscador/Buscador";
export default function Index() {
  const [darkMode, setDarkMode] = useState(false);

  const [sidebar, setSidebar] = useState({
    showMenu: true,
    miniSidebar: localStorage.getItem("miniSidebar") === "true",
  });

  const toggleSidebar = () => {
    setSidebar({
      ...sidebar,
      showMenu: !sidebar.showMenu,
      miniSidebar: window.innerWidth <= 320 ? true : sidebar.miniSidebar,
    });
  };

  return (
    <>

      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      {/* <ButtonMobile /> */}
      <div className="menu" onClick={toggleSidebar}>
        <ion-icon
          name={sidebar.showMenu ? "close-outline" : "menu-outline"}
        ></ion-icon>
      </div>
      <div
        className={`barra-lateral ${
          sidebar.showMenu ? "max-barra-lateral" : ""
        } ${sidebar.miniSidebar ? "mini-barra-lateral" : ""}`}
      >
      <MiniNavbar sidebar={sidebar} setSidebar={setSidebar}/>

      <Buscador sidebar={sidebar} darkMode={darkMode}/>

      <div className="linea"></div>
        <nav className="navegacion mt-3">
          <ul>
            {LinksNabvar().map((nav) => (
              <li key={nav.id}>
                    <Link
                      onClick={toggleSidebar}
                      to={nav.href}
                      className={
                        location.pathname === nav.href ? "active mb-2" : "mb-2"
                      }
                    >
                      <img
                        src={
                          darkMode && nav.legendary2
                            ? nav.legendary2
                            : nav.legendary
                        }
                        width={sidebar.miniSidebar ? "100%" : nav.width}
                        alt={nav.name}
                      />
                      {!sidebar.miniSidebar && (
                        <span className="p-2">{nav.name}</span>
                      )}
                    </Link>
                  </li>
            ))}
          </ul>
        </nav>

        <div>
          <div className="linea"></div>
            <DarkLight darkMode={darkMode} setDarkMode={setDarkMode}/>
            <Translation />
          </div>
      </div>

      <main className={sidebar.miniSidebar ? "min-main" : ""}>
          <Routes>
            {LinksNabvar().map(
              (
                ruta // Cambiamos el nombre de la función
              ) => (
                <Route
                  key={ruta.id}
                  path={ruta.href}
                  element={<ruta.component />}
                />
              )
            )}
          </Routes>
          
        </main>
    </div>
    </>
  )
}
