<template>
  <div class="example">
    Typescript component, using class with Options decorator.
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
  data: () => ({
  }),
})
export default class Home extends Vue {}
</script>
