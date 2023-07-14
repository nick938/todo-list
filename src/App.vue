<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/about">about</RouterLink>
  <br />
  <RouterLink to="/">/</RouterLink>

  <RouterView />
</template>

<style scoped>
#app {
  height: 100vh;
}
</style>
