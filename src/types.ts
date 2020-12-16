/** Vue Types */

import { DefineComponent, SetupContext, VNode as VueNode } from 'vue';
import { DeepReadonly as ReadOnly, Ref, UnwrapRef, WritableComputedRef } from '@vue/reactivity/dist/reactivity';
import { Router } from 'vue-router/dist/vue-router';
import { ComputedRef } from '@vue/runtime-core/dist/runtime-core';

export { ReadOnly, Ref, Router, SetupContext, UnwrapRef };


/** Project Types */

export type Actions = Obj<Function>;

export type ActionHandler = Fn<Actions, [Globals]>;

export interface Data {
  [key: string]: unknown;
}

export type Component = VComponent | VNode | FnComponent;

export type Computed<T> = ComputedRef<T> | WritableComputedRef<T> | WritableComputedRef<UnwrapRef<T>>;

export declare type BasicProps = Data;

export type Fn<Return = any, Params extends any[] = any[]> = (...param: Params) => Return;

export type FnComponent = Fn<VNode, [BasicProps, SetupContext]>;

export interface GlobalActions {
  actions: Actions | Readonly<Actions>;
};
export interface GlobalStore {
  store: Store | ReadOnly<Store>;
};
export type Globals = GlobalActions & GlobalStore;

export type Obj<T = any, K extends ObjectKey = string> = { [P in K]: T; };
export type ObjectKey = string | number | symbol;

export type Provider = [Symbol, any];
export type Providers = Obj<Provider>;

export type Reactive<T> = T extends Ref ? T : UnwrapRef<T>;

export type Getter<T> = (value: T | UnwrapRef<T>, ref: Ref) => void;
export type Setter<T> = (value: T | UnwrapRef<T>, ref: Ref) => void;

export type Store = Reactive<Object>;

export type VComponent = DefineComponent<{}, {}, any>;

export type VNode = VueNode | JSX.Element;
