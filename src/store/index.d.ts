import { Actions, Computed, Fn, Globals, ReadOnly, Ref, Setter, Store } from '@/types';

export const refActions: Fn<Actions>;
export const useActions: Fn<Readonly<Actions>>;

export const refStore: Fn<Store>;
export const useStore: Fn<ReadOnly<Store>>;

export const refGlobals: Fn<Globals>;
export const useGlobals: Fn<Globals>;

export function setter<T>(value: T, setter: Setter<T>): Computed<T>;

export function local<T>(key: string, value: T): Ref<T>;

export const append: Readonly<Object>;
