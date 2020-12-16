import { readonly } from 'vue';
import { append, local } from '.';

const STORAGE = 'example';

const example = local(STORAGE, null);

export const refExample = () => example;
export const useExample = () => readonly(example);

export function setExample(value) {
  example.value = value;
}

append
.ref('example', example)
// .action('setExample', setExample)
.actions({
  setExample,
})
