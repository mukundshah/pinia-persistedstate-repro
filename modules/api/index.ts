import { addPlugin, createResolver, defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "api",
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    nuxt.hook("modules:done", () => {
      addPlugin({ src: resolve("./runtime/plugin") }, { append: true });
    });
  },
});
