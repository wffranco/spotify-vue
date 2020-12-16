<template>
  <component
    :is="tag"
    :class="{
      'container': !fluid,
      'container-fluid': fluid,
      'container-sm': sm,
      'container-md': md,
      'container-lg': lg,
      'container-xl': xl,
      'py-3': tag === 'main',
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {type: String, default: 'main'},
    fluid: {type: Boolean},
    sm: {type: Boolean},
    md: {type: Boolean},
    lg: {type: Boolean},
    xl: {type: Boolean},
  },
}
</script>
