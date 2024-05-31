import { useState, useEffect } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { formatPokemonName, capitalizeFirstLetter} from "../../../assets/function/funciones"
import './styles/modal.css'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import CarouselImg from './component/CarouselImg';
import MainData from './component/MainData';
import BasicStatitics from './component/BasicStatitics';
import Evolution from './component/Evolution';
import SwiperSlides from './component/SwiperSlides';

export default function ModalPokemon({ show, handleClose, selectedPokemon, darkMode }) {
    const { t } = useTranslation();
    const [pokemonInfo, setPokemonInfo] = useState(null);
    const [evolutionChain, setEvolutionChain] = useState(null);
    
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const data = await getPokemonAll(selectedPokemon.value);
    //             setPokemonInfo(data);
    //         } catch (error) {
    //             console.error("Error fetching Pokemon data:", error);
    //         }
    //     }
    //     fetchData();
    // }, []);
    useEffect(()=> {
        const getPokemonInfo = async(id) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemonInfo(data)
            const speciesResponse = await fetch(data.species.url);
            const speciesData = await speciesResponse.json();
            const evolutionResponse = await fetch(speciesData.evolution_chain.url);
            const evolutionData = await evolutionResponse.json();
            setEvolutionChain(evolutionData);

        } 
        if (selectedPokemon) {
            getPokemonInfo(selectedPokemon.value)
        }
    },[selectedPokemon])

    return (
        <>
            {pokemonInfo ? 
                <Modal size="xl" show={show} onHide={handleClose} backdrop="static" dialogClassName={darkMode ? "modal-dark" : ""}>
                <Modal.Header closeButton className='header' >
                    <Modal.Title>N° {pokemonInfo.id} - {capitalizeFirstLetter(formatPokemonName(pokemonInfo.name))}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="background-info">
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <CarouselImg pokemonInfo={pokemonInfo} />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6}>
                            <MainData pokemonInfo={pokemonInfo} />
                            <br />
                            <BasicStatitics pokemonInfo={pokemonInfo} />
                        </Col>
                    </Row>
                    <br />
                    {evolutionChain && (
                        <Row>
                            <Col className="pokemon-chain" xs={12} lg={6}>
                                <Evolution evolutionChain={evolutionChain}/> 
                            </Col>
                            <Col className="pokemon-chain" xs={12} lg={6}>
                                <SwiperSlides pokemonInfo={pokemonInfo}/>
                            </Col>
                        </Row>
                    )}
                    

                </Modal.Body>
                <Modal.Footer className="footer">
                    <Button variant="primary" onClick={handleClose}>
                    entendido
                    </Button>
                </Modal.Footer>
            </Modal>
            :
            <Modal size="xl" show={show} onHide={handleClose} backdrop="static" dialogClassName={darkMode ? "modal-dark" : ""}>
                <Modal.Header closeButton className='header-modal'>
                    <Modal.Title>Cargando...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {/* <img src={pokemonInfo.sprites.front_default}/> */}
                <Skeleton count={5}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                    entendido
                    </Button>
                </Modal.Footer>
            </Modal>
            }
        </>

    ); 
}
