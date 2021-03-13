import DefaultLayout from "~/layouts/Default.vue";

import { common } from "@prismicio/vue/components";

import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Then add it to export function

export default function(Vue) {
  Vue.component("Layout", DefaultLayout);

  Vue.use(BootstrapVue);

  Vue.prototype.$prismic = {
    linkResolver() {}
  };

  Object.entries(common).forEach(([_, component]) => {
    Vue.component(component.name, component);
  });
}
