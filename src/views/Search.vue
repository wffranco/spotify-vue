<template>
  <div class="container-fluid my-3">
    <Music v-bind="parsed" />
  </div>
</template>

<script>
import Music from '@/components/Music';

export default {
  name: 'Search',
  components: { Music },
  props: {
    query: {type: String},
    page: {type: Number},
  },
  computed: {
    parsed() {
      return {
        page: parseInt(this.page) || 1,
        query: String(this.query || ''),
      };
    },
  },
}
</script>
