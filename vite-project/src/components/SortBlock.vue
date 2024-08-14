<template>
  <aside
    class="flex flex-row gap-8"
    aria-role="radiogroup"
    aria-label="Sorting Options"
  >
    <div
      v-for="item in sortOptions"
      :key="item"
      aria-role="radio"
      :aria-checked="isSortBy === item"
      class="cursor-pointer"
      @click="setSortBy(item)"
    >
      {{ item }}
      <span v-if="isSortBy === item">
        <span v-if="isSortAsc"> ⬆️ </span>
        <span v-else> ⬇️ </span>
      </span>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isSortBy = computed(() => store.state.isSortBy);
const isSortAsc = computed(() => store.state.isSortAsc);
const sortOptions = ["Rating", "Title", "Price"];

const setSortBy = (sortBy: string) => {
  if (sortBy !== store.state.isSortBy) {
    store.commit("setSortAsc", sortBy !== "Rating");
  } else {
    store.commit("setSortAsc", !store.state.isSortAsc);
  }

  store.commit("setSortBy", sortBy);
  store.commit("setFilteredActivities");
};
</script>
