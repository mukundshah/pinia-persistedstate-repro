<script setup lang="ts">
const store = authStore();
</script>

<template>
  <div>
    {{ store.token }}
    <button @click="store.token++">Update Token</button>
  </div>
</template>
