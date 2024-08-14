<template>
  <div role="listitem" class="h-full">
    <a href="#" class="h-full">
      <article
        class="flex flex-col border border-slate-300 rounded overflow-hidden h-full"
      >
        <div class="w-full">
          <img
            class="bg-cover bg-center aspect-auto"
            :src="`https://picsum.photos/600/400.webp?random=${item.id}`"
            :alt="item.title"
          />
        </div>
        <section
          class="flex flex-col p-4 h-full font-bold text-lg leading-tight"
        >
          <h2 class="flex flex-1 mb-4 tracking-tight">
            <span class="mr-2" v-if="item.specialOffer">🥳</span>
            {{ item.title }}
          </h2>
          <aside class="flex flex-row justify-between">
            <span aria-label="Rating">⭐ {{ item.rating }}</span>
            <span aria-label="Price">{{ item.price }} 💰</span>
          </aside>
        </section>
      </article>
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps(["item"]);
</script>
