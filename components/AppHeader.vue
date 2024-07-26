<script setup lang="ts">
const ITEMS = [
  {
    title: "home",
    href: "",
  },
  {
    title: "bracket",
    href: "bracket",
  },
  {
    title: "admin",
    href: "admin",
  },
];
</script>

<template>
  <header class="flex justify-between gap-4">
    <h2>samkough smash tournament 2024</h2>
    <nav>
      <ul class="flex gap-2">
        <li :key="item.href" v-for="item in ITEMS">
          <NuxtLink :to="'/' + item.href">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
  