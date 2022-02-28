import { writable } from "svelte/store"


export const pokemon = writable([])  // empty array default for the writable store

const fetchPokemon = async (num) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`
    const res = await fetch(url)

    const data = await res.json()

    const loadedPokemon = data.results.map((pokedata, index) => {
        return {
            name: pokedata.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
        }
    })
    pokemon.set(loadedPokemon)
}

// Call the function
fetchPokemon(151)