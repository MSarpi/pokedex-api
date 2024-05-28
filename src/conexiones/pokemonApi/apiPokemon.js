const BASE_URL_POKEMON = "https://pokeapi.co/api/v2/pokemon-species";

export async function getPokemon(endpoint = "") {
    try {
        const response = await fetch(`${BASE_URL_POKEMON}${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        return [];
    }
}

export async function getAllPokemon() {
    let allPokemon = [];
    let url = BASE_URL_POKEMON + "?limit=1025"; // Empieza con un límite grande para reducir el número de solicitudes

    while (url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            allPokemon = allPokemon.concat(data.results);
            url = data.next; // URL para la siguiente página de resultados
        } catch (error) {
            console.error("Error fetching data from API:", error);
            break;
        }
    }
    return allPokemon;
}



const BASE_URL_POKEMON_ALL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonAll(endpoint = "") {
    try {
        const response = await fetch(`${BASE_URL_POKEMON_ALL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching data from API:", error);
        return [];
    }
}
