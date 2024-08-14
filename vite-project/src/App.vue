<template>
  <main class="flex flex-col max-w-7xl mx-auto px-8 py-24">
    <div
      class="flex flex-row justify-between border-0 border-b border-slate-300 pb-8 mb-8 items-baseline"
    >
      <h1 class="text-3xl font-black">Activities</h1>
      <SortBlock />
    </div>

    <div class="grid grid-cols-4 gap-8">
      <FilterBlock />
      <section class="col-span-3">
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
