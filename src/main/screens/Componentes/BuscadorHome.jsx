import { useState, useEffect } from 'react';
import Select from 'react-select'
import { getAllPokemon } from '../../../conexiones/pokemonApi/apiPokemon';
import { useTranslation } from 'react-i18next';
import ModalPokemon from '../../principal/component/Modal/ModalPokemon';
import ModalError from '../../principal/component/Modal/ModalError';
import { formatPokemonName, capitalizeFirstLetter } from '../../assets/function/funciones';
import { Row, Col, Container } from 'react-bootstrap';
export default function BuscadorHome({darkMode}) {
    const { t } = useTranslation();
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const [showPokemonModal, setShowPokemonModal] = useState(false); 
    // const handleShowPokemonModal = () => setShowPokemonModal(true);
    const handleClosePokemonModal = () => setShowPokemonModal(false);

    const [showAlert, setShowAlert] = useState(false);
    // const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);

    const handleSelectChange = (selectedOption) => {
        setSelectedPokemon(selectedOption);
    };

    const handleSearch = () => {
        if (!selectedPokemon) {
            setShowAlert(true);
        } else {
            setShowPokemonModal(true);
            setShowAlert(false);
        }
    };
      
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getAllPokemon();
                setPokemonList(data);
            } catch (error) {
                console.error("Error fetching Pokemon data:", error);
            }
        }
        fetchData();
    }, []);

    const customNoOptionsMessage = () => {
        return "Cargando...";
    };

    return (
                <>
                <div className='buscadorMobile'>
                <Container>
                <Select
                        options={pokemonList.map((pokemon) => ({
                            value: pokemon.url.split("/")[6],
                            label: `N° ${pokemon.url.split("/")[6]} - ${capitalizeFirstLetter(formatPokemonName(pokemon.name))}`,
                        }))}
                        onChange={handleSelectChange}
                        placeholder={t('navbar_header.select')}
                        className="mb-2"
                        noOptionsMessage={customNoOptionsMessage}
                    />
                    <button className="boton-buscador-home" onClick={handleSearch}>
                        <ion-icon name="search"></ion-icon>
                        <span>{t('navbar_header.search')}</span>
                    </button>
                    
                    {showAlert && <ModalError show={showAlert} handleClose={handleCloseAlert} darkMode={darkMode}/>}
                    {showPokemonModal && <ModalPokemon show={showPokemonModal} handleClose={handleClosePokemonModal} selectedPokemon={selectedPokemon} darkMode={darkMode}/>}
                
                </Container>
                </div>

</>
            
            
    );
}
