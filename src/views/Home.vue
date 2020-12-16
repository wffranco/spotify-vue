<template>
  <Container class="home d-flex flex-column" fluid>
    <div class="flex-fill"></div>
    <div class="text-center">
      <h1>{{ t('spotify_demo') }}</h1>
      <img alt="Vue logo" src="../assets/logo.png" />
      <h3>
        Vue 3 + bootstrap
      </h3>
      <h5 class="text-muted">
        {{ t('also_contains') }}:
        jsx, typescript
      </h5>
      <h5 class="text-muted">{{ t('I18n') }} (i18n)</h5>
      <h5 class="text-muted">{{ t('global_storage') }}</h5>
      <h6>
        <span className="mr-2">{{ t('source_code') }}:</span>
        <a :href="source_code">{{ source_code }}</a>
      </h6>
    </div>
    <div class="flex-fill"></div>
  </Container>
</template>

<script>
import { useI18n } from 'vue-i18n';
import Container from '../components/Container';
import { source_code } from '../keys';

export default {
  name: 'Home',
  components: {
    Container,
  },
  setup() {
    const { t, d, locale } = useI18n();

    return { t, d, locale, source_code };
  },
}
</script>

<style lang="scss" scoped>
main {
  background-color: #282c34;
  color: white;
}
</style>
