import type { App } from 'vue';
import { Description, Props, Playground } from '@divriots/dockit-vue';

export default {
  install: (app: App) => {
    app.component('Description', Description);
    app.component('Props', Props);
    app.component('Playground', Playground);
  },
};
