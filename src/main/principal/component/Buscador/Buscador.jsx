import { useState, useEffect } from 'react';
import Select from 'react-select'
import { getAllPokemon } from '../../../../conexiones/pokemonApi/apiPokemon'
import { useTranslation } from 'react-i18next';

export default function Buscador({sidebar}) {
    const { t } = useTranslation();
    const [pokemonList, setPokemonList] = useState([]);

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
        {!sidebar.miniSidebar && (
            <Select
                options={pokemonList.map((pokemon) => ({
                    value: pokemon.url.split("/")[6],
                    label: `N° ${pokemon.url.split("/")[6]} - ${pokemon.name}`,
                }))}
                placeholder={t('navbar_header.select')}
                className="mb-2"
                noOptionsMessage={customNoOptionsMessage}
            />
        )}

        </>
    );
}