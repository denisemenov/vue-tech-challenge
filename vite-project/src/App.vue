<template>
  <main class="flex flex-col max-w-7xl mx-auto px-8 py-24 min-h-screen gap-8">
    <div
      class="flex flex-row justify-between border-0 border-b border-slate-300 pb-8 gap-8 items-baseline"
    >
      <h1 class="text-3xl font-black" id="activitiesHeading">Activities</h1>
      <SortBlock />
    </div>

    <div class="grid grid-cols-4 gap-8 h-full flex-1">
      <FilterBlock />
      <section
        class="flex col-span-3 h-full items-center justify-center"
        aria-live="polite"
        aria-labelledby="activitiesHeading"
      >
        <ActivitiesList />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import ActivitiesList from "./components/ActivitiesList.vue";
import FilterBlock from "./components/FilterBlock.vue";
import SortBlock from "./components/SortBlock.vue";
</script>
