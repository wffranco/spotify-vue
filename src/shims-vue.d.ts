declare module '*.vue' {
  import type { VFNode, VComponent} from '@/types';
  declare const component: VComponent | VFNode;
  export default component;
}

declare module '*.jsx' {
  import type { VFNode, VComponent} from '@/types';
  declare const component: VComponent | VFNode;
  export default component;
}

declare module '*.js' {
  import type { VFNode, VComponent} from '@/types';
  declare const component: VComponent | VFNode;
  export default component;
}
