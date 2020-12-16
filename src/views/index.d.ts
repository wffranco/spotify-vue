import { RouteRecordRaw } from 'vue-router';

export declare function getViewRoute({name = null, component = null, ...route}): RouteRecordRaw;

export declare const getViewRoutes: (routes: Object) => RouteRecordRaw[];
