import { createStore } from "vuex";
import {defineNuxtPlugin} from "nuxt/app";

const store = createStore({

    state() {
        return {
            pets: {},
        };
    },

    mutations: {
        
    },

    actions: {

    }

});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(store);
});