import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
export const key: InjectionKey<Store<State>> = Symbol();

//STORE
export const store = createStore<State>({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});

//STORE_INT
export interface State {
  count: number;
}
