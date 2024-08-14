<template>
  <fieldset
    class="flex flex-row gap-8"
    role="radiogroup"
    aria-labelledby="sortingOptionsLabel"
    aria-describedby="sortingOptionsDescription"
  >
    <legend id="sortingOptionsLabel" class="sr-only">Sorting Options</legend>
    <span id="sortingOptionsDescription" class="sr-only">
      Use the up and down arrow keys to change the sorting direction. Use the
      left and right arrow keys to change the sorting option.
    </span>

    <div v-for="item in sortOptions" :key="item" class="relative">
      <input
        class="peer sr-only"
        type="radio"
        name="sortOptions"
        :id="item"
        :value="item"
        v-model="sortBy"
        @keydown.up.prevent="setSortDirection(true)"
        @keydown.down.prevent="setSortDirection(false)"
      />
      <label
        :for="item"
        class="cursor-pointer px-2 py-1 rounded peer-[:focus-visible]:outline"
        @click="setSortDirection(!isSortAsc)"
      >
        {{ item }}
        <span v-if="sortBy === item">
          <span v-if="isSortAsc"> ⬆️ </span>
          <span v-else> ⬇️ </span>
        </span>
      </label>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isSortAsc = computed(() => store.state.isSortAsc);
const sortOptions = ["Rating", "Title", "Price"];

const sortBy = computed({
  get: () => store.state.isSortBy,
  set: (sortBy) => {
    if (sortBy !== store.state.isSortBy) {
      store.commit("setSortAsc", sortBy !== "Rating");
    } else {
      store.commit("setSortAsc", !store.state.isSortAsc);
    }

    store.commit("setSortBy", sortBy);
    store.commit("setFilteredActivities");
  },
});

const setSortDirection = (direction: boolean) => {
  store.commit("setSortAsc", direction);
  store.commit("setFilteredActivities");
};
</script>
