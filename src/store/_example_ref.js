import { readonly, ref } from 'vue';
import { append } from '.';

const example = ref(null);

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
