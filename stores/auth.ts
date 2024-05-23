import { defineStore } from "pinia";
import { ref } from "vue";

const authStore = defineStore(
  "auth",
  () => {
    const token = ref(1);

    return { token };
  },
  { persist: true },
);
