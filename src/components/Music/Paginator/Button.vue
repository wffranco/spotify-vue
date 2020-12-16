<template>
  <li :class="['page-item', {disabled: isDisabled}]">
    <button class="page-link" :disabled="isDisabled" @click="goToPage">
      <slot>
        <span aria-hidden="true">{{ page }}</span>
      </slot>
    </button>
  </li>
</template>

<script>
import router from '@/router';

export default {
  name: 'Button',
  props: {
    current: {type: Number, default: 1},
    disabled: Boolean,
    page: {type: Number, default: 1},
    query: {type: String, default: ''},
  },
  computed: {
    isDisabled() {
      return this.disabled || this.page === '...' || this.page === this.current;
    },
  },
  methods: {
    goToPage() {
      if (!this.isDisabled) router.push({name: 'Search', params: {query: this.query, page: this.page}});
    },
  },
};
</script>

<style>
</style>
