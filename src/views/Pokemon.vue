// create a vuejs component that displays a pokemon
<template>
  <div class="page">
    <h1 class="text-center bg-white mt-0 text-6xl">
      <span class="capitalize mr-3">{{ pokemon.name }}</span
      ><span class="text-500">No.{{ pokemon.displayId }}</span>
    </h1>
    <div class="grid justify-content-around">
      <div class="col">
        <Image :src="pokemon.image" :alt="pokemon.name" preview />
      </div>
      <div class="col pl-6">
        <div>
          <h2 class="capitalize">type</h2>
          <Chip
            v-for="type in pokemon.types"
            :key="type"
            :label="type"
            class="px-2 capitalize mr-2"
            :class="typeColorCode[type]"
          />
        </div>

        <div class="mt-7">
          <h2 class="capitalize">abilities</h2>
          <Tag
            v-for="power in pokemon.abilities"
            :key="power"
            :value="power"
            class="px-2 capitalize mr-2 mb-2"
          />
        </div>
      </div>

      <div class="col">
        <h2 class="capitalize">Stats</h2>
        <Chart type="polarArea" :data="chartData" />
      </div>
    </div>
    <div id="cto" class="grid justify-content-center mt-5">
      <Button
        label="find more pokemons"
        class="text-2xl col-4 uppercase"
        @click="router.push({ name: 'Home' })"
      />
    </div>
  </div>
</template>

<script>
import { fetchPokemonByNameOrId, typeColorCode } from "@/helpers/pokemon";
import { computed, reactive } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
import Button from "primevue/button";
import Chart from "primevue/chart";
import Chip from "primevue/chip";
import Image from "primevue/image";
import Tag from "primevue/tag";
// import router from "../router";

export default {
  components: { Button, Chart, Chip, Tag, Image },

  beforeRouteEnter(to, _, next) {
    fetchPokemonByNameOrId(to.params.id)
      .then((data) => next((vm) => Object.assign(vm.pokemon, data)))
      .catch(() => next(false));
  },

  setup() {
    let pokemon = reactive({
      id: null,
      name: "",
      image: "",
      forms: [],
      types: [],
      stats: [],
    });

    const router = useRouter();

    const chartData = computed(() => ({
      datasets: [
        {
          data: pokemon.stats.map((stat) => stat.value),
          backgroundColor: [
            "#0c84a6",
            "#f7c860",
            "#6f4e7b",
            "#9dd766",
            "#ffa056",
            "#8dddd0",
          ],
          label: "My dataset",
        },
      ],
      labels: pokemon.stats.map(
        (stat) => stat.name.charAt(0).toUpperCase() + stat.name.slice(1)
      ),
    }));

    onBeforeRouteUpdate(async (to, from) => {
      if (to.params.id !== from.params.id) {
        const newPokemon = await fetchPokemonByNameOrId(to.params.id);
        Object.assign(pokemon, newPokemon);
      }
    });

    return { chartData, pokemon, typeColorCode, router };
  },
};
</script>
