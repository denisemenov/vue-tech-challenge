<template>
  <div
    class="col-span-3 text-center font-black text-3xl"
    v-if="isLoading"
  >
    Loading list of activities...
  </div>

  <div
    v-else
    class="grid grid-cols-3 gap-8 self-start items-start"
    aria-label="Activity List"
    role="list"
  >
    <div
      class="col-span-3 text-center font-black text-3xl self-center"
      v-if="!filteredActivities.length"
    >
      No activities found
    </div>

    <ActivityItem
      v-for="(item, index) in filteredActivities"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import ActivityItem from "./ActivityItem.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("getAllActivities");
});

const filteredActivities = computed(() => store.state.filteredActivities);
const isLoading = computed(() => store.state.isLoading);
</script>
