import Layout from '~/internals/src/Layout.vue';
import { registerComponents } from '~/index';

export default {
  Layout: Layout,
  enhanceApp: ({ app }) => {
    app.use(registerComponents);
  },
};
