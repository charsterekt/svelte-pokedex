<script context="module">
    export async function load({params, fetch}) {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=151`
        const res = await fetch(url)

        const data = await res.json()

        const loadedPokemon = data.results.map((pokedata, index) => {
            return {
                name: pokedata.name,
                id: index + 1,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
            }
        })
        return {props: {pokemon:loadedPokemon}}
    }   
</script>

<script>
    import Card from "../components/card.svelte"
    export let pokemon

    // search functionality
    let searchTerm = ""
    let filteredPokemon = []  // initially empty

    // Reactive syntax for changing data
    $: {
        if(searchTerm) {
            filteredPokemon = pokemon.filter(poke => 
            poke.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
        } else {
            filteredPokemon = [...pokemon]  // Copy pokemon into filtered pokemon
        }
    }
</script>


<svelte:head>
    <title>Pokédex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">
    Pokédex
</h1>

<input type="text" bind:value={searchTerm} placeholder="Search" class="
    w-full rounded-md text-lg p-4 border-2 border-gray-200
" />

<div class="
    grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-4
">
    {#each filteredPokemon as poke}
        <Card poke={poke} />
    {/each}
</div>
