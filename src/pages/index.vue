<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: {'id': 1}}">Project 1s</RouterLink>
  </div>
</template>

<script setup lang="ts">

</script>
