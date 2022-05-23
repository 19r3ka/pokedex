<template>
  <div class="page">
    <div id="toolbar" class="mb-4">
      <Toolbar class="surface-0">
        <template #start>
          <span class="p-input-icon-left">
            <i class="pi pi-filter" />
            <InputText
              v-model="filterTerm"
              type="text"
              placeholder="Filter pokemons"
            />
          </span>
        </template>
        <template #end>
          <SelectButton
            v-model="sortOption"
            :options="sortOptions"
            data-key="value"
            @change="
              router.replace({
                name: 'Home',
                query: { sort: sortOption.value },
              })
            "
          >
            <template #option="slotProps">
              <i :class="slotProps.option.icon"></i>
            </template>
          </SelectButton>
        </template>
      </Toolbar>
    </div>

    <div id="pokemon-list" class="grid row-gap-2 justify-content-between">
      <TransitionGroup name="list">
        <Card
          v-for="pokemon in filteredPokemons"
          :key="pokemon.id"
          class="col-12 md:col-4 lg:col-3 shadow-none"
        >
          <template #header>
            <img :src="pokemon.image" :alt="pokemon.name" />
          </template>

          <template #subtitle>No. {{ pokemon.displayId }}</template>

          <template #title>
            <router-link
              :to="{ name: 'Pokemon', params: { id: pokemon.id } }"
              class="no-underline"
            >
              <span class="capitalize text-600">{{ pokemon.name }}</span>
            </router-link>
          </template>

          <template #content>
            <Chip
              v-for="type in pokemon.types"
              :key="type"
              :label="type"
              class="px-2 capitalize"
              :class="typeColorCode[type]"
            />
          </template>
        </Card>
      </TransitionGroup>
    </div>
    <div id="cto" class="grid justify-content-center mt-5">
      <Button
        label="load more"
        class="text-2xl col-4 uppercase"
        @click="fetchPokemons(nextUrl)"
      />
    </div>

    <ScrollTop />
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Card from "primevue/card";
import Button from "primevue/button";
import Chip from "primevue/chip";
import ScrollTop from "primevue/scrolltop";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import SelectButton from "primevue/selectbutton";
import { fetchPokemon, typeColorCode } from "@/helpers/pokemon";

// fetch the next batch of pokemons
function fetchPokemons(
  url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
) {
  return (
    fetch(url)
      .then((response) => response.json())
      .then(({ next, results }) => {
        nextUrl.value = next;
        results.forEach(({ url }) =>
          fetchPokemon(url).then((pokemon) => pokemons.push(pokemon))
        );
      })
      // reset the sortOption as a workaround for the pokemons not auto-sorting
      // when new pokemons are added to the list
      .then(() => (sortOption.value = ""))
      .catch((e) => `Something went wrong: ${e}`)
  );
}

// filter pokemons by name according to the filterTerm
const filteredPokemons = computed(() =>
  pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filterTerm.value.toLowerCase())
  )
);

// sort pokemons by the selected option
function sortPokemons(option) {
  const sortFunctions = {
    id: (a, b) => a.id - b.id,
    name: (a, b) => a.name.localeCompare(b.name),
    ["-id"]: (a, b) => b.id - a.id,
    ["-name"]: (a, b) => b.name.localeCompare(a.name),
  };
  if (Object.hasOwnProperty.call(sortFunctions, option)) {
    pokemons.sort(sortFunctions[option]);
  }
}

let nextUrl = ref("");
const pokemons = reactive([]);
const filterTerm = ref("");
const sortOption = ref("");
const sortOptions = reactive([
  { icon: "pi pi-sort-alpha-down", value: "name" },
  { icon: "pi pi-sort-alpha-up", value: "-name" },
  { icon: "pi pi-sort-numeric-down", value: "id" },
  { icon: "pi pi-sort-numeric-up", value: "-id" },
]);
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  await fetchPokemons();
  // todo: fix the bug that the pokemons are not sorted when the page is loaded
  if (route.query.sort) {
    sortPokemons(route.query.sort);
  }
});

watch(
  () => route.query.sort,
  (option) => {
    sortPokemons(option);
    // keep the sortOption in sync with the query so the correct filter button is ON
    sortOption.value = sortOptions.filter((o) => o.value === option).pop();
  }
);
</script>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.2);
}
</style>
