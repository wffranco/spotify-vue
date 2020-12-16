import { reactive, readonly, ref, watch } from 'vue';
import { app_name } from '@/consts';

// store
const store = reactive({});
const actions = {};
/** localStorage data */
const STORAGE = `store-${app_name}`;
const storage = JSON.parse(localStorage.getItem(STORAGE)) || {};
const rstorage = reactive(storage);
watch(rstorage, value => {
  localStorage.setItem(STORAGE, JSON.stringify(value));
});

export const refActions = () => actions;
export const useActions = () => readonly(actions);

export const refStore = () => store;
export const useStore = () => readonly(store);

export const refStorage = () => rstorage;
export const useStorage = () => readonly(rstorage);

export const refGlobals = () => ({
  store: refStore(),
  actions: refActions(),
});
export const useGlobals = () => ({
  store: useStore(),
  actions: useActions(),
});

/** refs linked to localStorage */
export function local(key, value = null) {
  const stored = Reflect.get(storage, key);
  const r = ref(stored !== undefined ? stored : value);
  Reflect.set(rstorage, key, r);
  return r;
}

export const append = Object.freeze({
  action(name, action, link = false) {
    Reflect.set(actions, name, link ? action({store, actions}) : action);
    return append;
  },
  actions(list) {
    if (list instanceof Function) list = list({store, actions});
    for (const name in list) append.action(name, list[name]);
    return append;
  },
  ref(name, ref) {
    Reflect.set(store, name, ref);
    return append;
  },
});
