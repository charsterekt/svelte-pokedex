<script context="module">
    export async function load({params, fetch}) {
        const id = params.id
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`

        const res = await fetch(url)
        const pokemon = await res.json()
        console.log(pokemon)
        return {props: {pokemon}}
    }   
</script>
<script>
    import { fade, fly } from "svelte/transition"

    export let pokemon
    const types = pokemon.types
    // types is an array of objects
    // can access the actual type from [idx].type.name
    // console.log(types)
</script>

<div class="flex flex-col items-center" in:fly="{{ y: 200, duration: 1000 }}" out:fade>
    <h1 class="text-4xl text-center my-8 uppercase">
        {pokemon.name}
    </h1>
    <p> 
        Type: 
        {#each types as type }
        <strong>{type.type.name[0].toUpperCase() + type.type.name.substring(1)}&nbsp;</strong>
        {/each}|
        Height: <strong>{pokemon.height}</strong> |
        Weight: <strong>{pokemon.weight}</strong>
    </p>
    <img class="card-image" src="{pokemon.sprites['front_default']}" alt={pokemon.name} />
</div>
