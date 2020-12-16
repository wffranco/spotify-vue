import { inject, readonly } from 'vue';
import { Actions, Fn, Globals, Providers, ReadOnly, Store } from '@/types';
import { useActions as getActions, useStore as getStore } from '.';

// import data
// import './locale';
// import './user';

export const STORE: Symbol = Symbol('store');
export const ACTIONS: Symbol = Symbol('actions');

export const getProviders: Fn<Providers> = () => ({
  actions: [ACTIONS, getActions()],
  store: [STORE, getStore()],
});

export const refActions: Fn<Actions> = () => inject(ACTIONS) || {};
export const refStore: Fn<Store> = () => inject(STORE) || {};
export const refGlobals: Fn<Globals> = () => ({
  actions: refActions(),
  store: refStore(),
});

export const useActions: Fn<Actions> = refActions;
export const useStore: Fn<ReadOnly<Store>> = () => readonly(refStore());
export const useGlobals: Fn<Globals> = () => ({
  actions: useActions(),
  store: useStore(),
});
