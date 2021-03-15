import DefaultLayout from "~/layouts/Default.vue";

import { common } from "@prismicio/vue/components";

import BootstrapVue from "bootstrap-vue";

import "bootstrap-vue/dist/bootstrap-vue.css";

import "~/assets/styles.scss";

// Then add it to export function

const transforSlicesMixin = {
  methods: {
    transforSlices(slices) {
      return slices.map(node => {
        const { body, ...remainingObject } = node.data;
        return {
          id: node.id,
          data: { ...remainingObject, body: JSON.parse(body) }
        };
      });
    }
  }
};

export default function(Vue, { head }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto"
  });

  Vue.component("Layout", DefaultLayout);

  Vue.use(BootstrapVue);

  Vue.prototype.$prismic = {
    linkResolver() {}
  };

  Vue.mixin(transforSlicesMixin);

  Object.entries(common).forEach(([_, component]) => {
    Vue.component(component.name, component);
  });
}
