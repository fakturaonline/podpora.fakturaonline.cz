import DefaultLayout from "~/layouts/Default.vue";

import { common } from "@prismicio/vue/components";

import BootstrapVue from "bootstrap-vue";
import format from "date-fns/format";

import "bootstrap-vue/dist/bootstrap-vue.css";

import "~/assets/css/styles.scss";

import "~/assets/fonts/icons.woff2";

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

export default function(Vue, { head, appOptions }) {
  Vue.filter("formatDate", value => {
    if (value) {
      return format(new Date(value), "dd.MM.yyyy");
    }
    return "";
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

  appOptions.i18n.setLocaleMessage(appOptions.i18n.locale, require(`./locales/${appOptions.i18n.locale}.json`));
}
