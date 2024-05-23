export default defineNuxtPlugin({
  name: "api",
  async setup() {
    const store = authStore();
    const config = useRuntimeConfig();

    const $api = $fetch.create({
      baseURL: config.public.api.baseURL,
      onRequest: ({ options }) => {
        options.headers = (options.headers || {}) as Record<string, string>;
        if (store.token) {
          // eslint-disable-next-line dot-notation
          options.headers["Authorization"] = `Token ${store.token}`;
        }
      },
    });

    return {
      provide: {
        api: $api,
      },
    };
  },
});
