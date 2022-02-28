<script>
    import { fade, fly } from "svelte/transition" 

    export let poke  // Receive a poke prop
</script>

<a href={`/pokemon/${poke.id}`} in:fly="{{ y: 200, duration: 1500 }}" 
    out:fade class="
    p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm
    hover:shadow-md flex flex-col items-center hover:scale-95
">
    <img src={poke.image} alt={poke.name} 
        class="h-40 w-40"
    />
    <h2 class="uppercase text-xl">#{poke.id} {poke.name}</h2>
</a>