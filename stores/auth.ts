import { defineStore } from "pinia";
import { ref } from "vue";

export const authStore = defineStore(
  "auth",
  () => {
    const token = ref(1);

    return { token };
  },
  { persist: true },
);
