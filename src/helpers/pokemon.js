// fetch pokemon by url
export async function fetchPokemon(url) {
  const response = await fetch(url);

  if (!response.ok)
    throw new Error(`${response.status}: ${response.statusText}`);

  const data = await response.json();
  return cleanPokemon(data);
}

// fetch a specific pokemon by id or name
export function fetchPokemonByNameOrId(nameOrId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${nameOrId}`;
  return fetchPokemon(url);
}

// Map pokemon types to colors
export const typeColorCode = {
  bug: "bg-yellow-100",
  dark: "bg-gray-800",
  dragon: "bg-indigo-100",
  electric: "bg-yellow-300",
  fairy: "bg-pink-100",
  fighting: "bg-red-100",
  fire: "bg-orange-100",
  flying: "bg-cyan-200",
  ghost: "bg-teal-100",
  grass: "bg-green-100",
  ground: "bg-orange-600",
  ice: "bg-blue-100",
  normal: "bg-gray-100",
  poison: "bg-purple-200",
  psychic: "bg-pink-500",
  rock: "bg-orange-200",
  steel: "bg-gray-500",
  water: "bg-blue-300",
};

// keep only useful data from the response
function cleanPokemon(pokemon) {
  return {
    id: pokemon.id,
    displayId: pokemon.id.toString().padStart(3, "0"),
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
    types: pokemon.types.map((t) => t.type.name),
    abilities: pokemon.abilities.map((a) => a.ability.name),
    forms: pokemon.forms.map((f) => f.name),
    stats: pokemon.stats.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
  };
}
