<template>
  <li class="nav-item">
    <form class="form-inline" @submit.prevent.stop="submit">
      <div class="input-group my-2 my-md-1">
        <input
          v-model="query"
          type="text"
          class="form-control form-control-sm-md"
          :placeholder="t('Search')"
          aria-label="Buscar"
          aria-describedby="button-search"
        />
        <div class="input-group-append">
          <button id="button-search" class="btn btn-sm btn-outline-light btn-search" type="submit">
            <Icon type="search" />
          </button>
        </div>
      </div>
    </form>
  </li>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Icon from '@/components/Icon';
import router from '@/router';

export default {
  name: 'MenuSearch',
  components: { Icon },
  setup() {
    const { t } = useI18n();
    const query = ref('');

    function submit() {
      console.log('submit');
      router.push({name: 'Search', params: {query: query.value}});
    }

    return { query, submit, t };
  },
}
</script>

<style>

</style>
