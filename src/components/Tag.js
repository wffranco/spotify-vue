import { h } from 'vue';

export default function El(tag, props = {}, { attrs = {}, slots = {} }) {
  return h(tag, { ...attrs, ...props }, slots);
}
