<template>
  <div class="card">
    <h5 class="card-header">{{ t('search') }}: <small>{{ query }}</small></h5>
    <div class="card-body">
      <Tracks :music="music" />
    </div>
  </div>
</template>

<script>
import Tracks from './Tracks';
import { onMounted, watch } from 'vue';
import { searchMusic, useMusic } from '../../store/music';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Music',
  components: { Tracks },
  props: {
    query: {type: String, default: ''},
    page: {type: Number, default: 1},
  },
  setup(props) {
    const music = useMusic();
    const { t } = useI18n();

    onMounted(() => {
      const search = () => searchMusic({query: props.query, page: props.page});
      watch(props, search);
      search();
    });

    return { music, t };
  },
}
</script>

<style>

</style>

