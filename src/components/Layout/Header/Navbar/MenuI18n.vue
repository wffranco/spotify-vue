<template>
  <li class="nav-item dropdown ml-2">
    <a
      id="i18nDropdown"
      class="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    ><Icon type="globe" /></a>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="i18nDropdown">
      <span
        v-for="(lang, key) in langs"
        :key="key"
        class="dropdown-item"
        role="button"
        @click="setLocale(key)"
      >
        <Icon :type="key === locale ? 'check-circle-fill' : 'circle'" />
        {{ lang }}
      </span>
    </div>
  </li>
</template>

<script>
import { onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { refLocale } from '@/store/locale';
import { langs } from '@/i18n';
import Icon from '@/components/Icon';

export default {
  name: 'MenuI18n',
  components: { Icon },
  setup() {
    const rlocale = refLocale();
    const { locale } = useI18n();
    watch(locale, value => {
      rlocale.value = value;
    });

    function setLocale(key) {
      if (key in langs) {
        locale.value = key;
      }
    }

    onBeforeMount(() => {
      setLocale(rlocale.value);
    });

    return { langs, locale, setLocale };
  },
}
</script>

<style>

</style>
