import { readonly } from 'vue';
import { append, local } from '.';

const STORAGE = 'locale';

const locale = local(STORAGE, null);

export const refLocale = () => locale;
export const useLocale = () => readonly(locale);

export function setLocale(value) {
  locale.value = value;
}

append
.ref('locale', locale)
.actions({
  setLocale,
});
