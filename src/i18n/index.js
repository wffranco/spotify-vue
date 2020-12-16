import { createI18n as create } from 'vue-i18n';
import en from './en';
import es from './es';

const main = 'en';

const t10s = {
  ...en.langs,
  ...es.langs,
};

export const langs = {
  ...en.names,
  ...es.names,
};

export function createI18n(l = null) {
  let locale = findLocale(l);
  return create({
    legacy: false,
    locale,
    ...formatI18n(t10s),
  });
}

const entries = e => e instanceof Array ? e : Object.entries(e);

function formatI18n(t10s) {
  return entries(t10s).reduce((data, [name, types]) => (
    entries(types).reduce((data, [type, value]) => ({
      ...data,
      [type]: {
        ...data[type],
        [name]: value,
      },
    }), data)
  ), {});
}

/** Get locale from the browser. If not in the list, take the best option */
function findLocale(l = null) {
  let locale = l || navigator.language;

  // exact match
  if (locale in t10s) return locale;

  // ISO 639-1 match (2 digits)
  if (locale > 2) locale = locale.substr(0, 2);
  for (const key in t10s) if (key.startsWith(locale)) return key;

  // search for main language
  if (l !== main) return findLocale(main);

  // return the first language
  for (const key in t10s) return key;
}

export default createI18n;
