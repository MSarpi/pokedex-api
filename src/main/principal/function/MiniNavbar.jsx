import imgLogo from '../../assets/img/pokemon.png'
import pokeball from '../../assets/img/pokebola.png'
export default function MiniNavbar({sidebar, setSidebar}) {

    const toggleMiniSidebar = () => {
        const newMiniSidebar = !sidebar.miniSidebar;
        setSidebar({
          ...sidebar,
          miniSidebar: newMiniSidebar,
        });
        localStorage.setItem("miniSidebar", newMiniSidebar);
    };

    return (
        <>
        {sidebar.miniSidebar ? (
            <div className="nombre-pagina-2">
              <img
                src={pokeball}
                width={"110%"}
                alt="pokemon"
                onClick={toggleMiniSidebar}
              />
              <span className="btn-arrow-open" onClick={toggleMiniSidebar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          ) : (
            <div className="nombre-pagina mt-3">
              <img src={imgLogo} width={"80%"} alt="pokemon" />
              <span className="btn-arrow-close" onClick={toggleMiniSidebar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 30 30"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          )}
        </>
    )
}
