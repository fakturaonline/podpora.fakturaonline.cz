import DefaultLayout from "~/layouts/Default.vue";

import { common } from "@prismicio/vue/components";

export default function(Vue) {
  Vue.component("Layout", DefaultLayout);

  Vue.prototype.$prismic = {
    linkResolver() {}
  };

  Object.entries(common).forEach(([_, component]) => {
    Vue.component(component.name, component);
  });
}
