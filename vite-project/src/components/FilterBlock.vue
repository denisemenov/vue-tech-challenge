<template>
  <aside class="flex flex-col gap-4" aria-label="Filter Options">
    <div class="flex flex-row gap-2 border-b border-slate-300 pb-6">
      <input
        type="checkbox"
        name="specialOffer"
        id="specialOffer"
        v-model="isShowSpecialOffers"
      />
      <label for="specialOffer" class="font-bold text-lg">Special Offer</label>
    </div>

    <div class="flex flex-col gap-2 border-b border-slate-300 pb-6">
      <label for="title" class="font-bold text-lg">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        class="border border-slate-600 rounded px-2 py-1"
        placeholder="Title"
        v-model="title"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="priceFrom" class="font-bold text-lg">Price</label>
      <div class="flex flex-row gap-4">
        <input
          type="number"
          name="priceFrom"
          id="priceFrom"
          class="border border-slate-600 rounded w-1/2 px-2 py-1"
          placeholder="Price From"
          v-model="priceFrom"
        />
        <input
          type="number"
          name="priceTo"
          id="priceTo"
          class="border border-slate-600 rounded w-1/2 px-2 py-1"
          placeholder="Price To"
          v-model="priceTo"
        />
      </div>
    </div>
    {{ title }}
    {{ priceFrom }}
    {{ priceTo }}
    {{ isShowSpecialOffers }}
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const title = computed({
  get: () => store.state.title,
  set: (value) => {
    store.commit("setTitle", value);
    store.commit("setFilteredActivities");
  },
});
const isShowSpecialOffers = computed({
  get: () => store.state.isShowSpecialOffers,
  set: (value) => {
    store.commit("setShowSpecialOffer", value);
    store.commit("setFilteredActivities");
  },
});
const priceFrom = computed({
  get: () => store.state.priceFrom,
  set: (value) => {
    store.commit("setPriceFrom", value);
    store.commit("setFilteredActivities");
  },
});
const priceTo = computed({
  get: () => store.state.priceTo,
  set: (value) => {
    store.commit("setPriceTo", value);
    store.commit("setFilteredActivities");
  },
});
</script>

<style scoped></style>
