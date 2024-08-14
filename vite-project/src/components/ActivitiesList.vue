<template>
  <div v-if="isLoading">Loading...</div>
  <div
    v-else
    class="grid grid-cols-3 gap-8"
    aria-label="Activity List"
    aria-role="list"
  >
    <div v-if="!filteredActivities.length">No activities found</div>

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
