import Buscador from "../principal/component/Buscador/Buscador";
import BuscadorHome from "./Componentes/BuscadorHome";
import CarouselHome from "./Componentes/CarouselHome";
export default function Home({darkMode}) {
  return (
    <>
      <div className='img-home'></div>
      <div className="buscador-mood">
      <div className='buscador-container'>
        <BuscadorHome darkMode={darkMode}/>
      </div>
      </div>


      <div className='marquee-container'>
        <CarouselHome/>
      </div>

     
      
    </>
  )
}
