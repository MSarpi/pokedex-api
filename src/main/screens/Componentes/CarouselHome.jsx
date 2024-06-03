import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Marquee from "react-fast-marquee";
import { Card } from 'react-bootstrap';
import ImgLoading from '../../assets/img/pokemon/loadedimg.png'
export default function CarouselHome() {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Paso 1: Obtener la lista de todos los Pokémon
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0');
          const allPokemon = response.data.results;
  
          // Paso 2: Seleccionar 20 Pokémon aleatorios
          const randomPokemonUrls = [];
          while (randomPokemonUrls.length < 20) {
            const randomIndex = Math.floor(Math.random() * allPokemon.length);
            const randomPokemon = allPokemon[randomIndex];
            if (!randomPokemonUrls.includes(randomPokemon.url)) {
              randomPokemonUrls.push(randomPokemon.url);
            }
          }
  
          // Paso 3: Obtener detalles de los 20 Pokémon seleccionados
          const pokemonDetails = await Promise.all(randomPokemonUrls.map(url => axios.get(url)));
          const pokemonDetailsData = pokemonDetails.map(p => p.data);
  
          setPokemonData(pokemonDetailsData);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    // if (loading) return <div><img src={ImgLoading}/></div>;
    if (error) return <div>Error: {error.message}</div>;
  
  
  return (<>
    <Marquee speed={100}>
    {pokemonData.map(pokemon => (
    <Card key={pokemon.id} style={{backgroundColor: 'transparent', border: 'none' }} className='sizeCardCarouselPokemon'>
      <Card.Body >
        <div className={`background-${pokemon.types[0].type.name}${pokemon.types[1] ? `-${pokemon.types[1].type.name}` : ''} background-common`}>
        {loading ? (
          <img src={ImgLoading} width="100%"/> 
        )
        :
        (<img src={pokemon.sprites.other["official-artwork"].front_default} width="100%" />)}
          
        </div>
      </Card.Body>
    </Card>

    ))}
    </Marquee>
    </>
  )
}
