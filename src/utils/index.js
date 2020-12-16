import { computed, ref, watch } from 'vue';

export function setter(value, setter) {
  const r = ref(value);
  return computed({
    get: () => r.value,
    set: (value) => setter(value, r),
  });
}

export function watchOnce(sources, cb, options) {
  const unwatch = watch(sources, (...args) => {
    unwatch();
    return cb(...args);
  }, options);
  return unwatch;
}

export function queryString(entries) {
  if (entries instanceof Array) {
    //must do something if is array
  } else if (entries instanceof Object) {
    entries = Object.entries(entries);
  } else {
    entries = [];
  }
  return entries
    .map(entry => entry.map(el => encodeURIComponent(el)))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}
