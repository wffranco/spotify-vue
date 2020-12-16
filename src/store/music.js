import { readonly, ref } from 'vue';
import { append } from '.';
import { api } from './api';
import { queryString } from '@/utils';


const music = ref(init());

export const refMusic = () => music;
export const useMusic = () => readonly(music);

export function setMusic(value) {
  music.value = value;
}

function init() { return { query: {}, loading: false, tracks: null, error: null }; }

function merge(first, ...more) {
  return more.reduce((group, next) => Object.assign(group, next||{}), {...first});
}

export function resetMusic() {
  music.value = init();
}

function mergeMusic(data) {
  music.value = merge(music.value, data, {error: null});
}

function errorMusic(error = null) {
  music.value = merge(music.value, {error});
}

export async function searchMusic(data) {
  console.log(data);
  const { query:q = '', page = 1, limit = 20, type = 'track' } = data;
  if (!q) return;
  const offset = (page - 1) * limit;
  const query = {q, offset, limit, type};
  const search = queryString(query);
  const searchMatch = () => search === queryString(music.value.query);
  if (searchMatch()) return;
  mergeMusic({query, loading: true});
  return await api(`v1/search?${search}`).then((music) => {
    if (music && searchMatch()) {
      mergeMusic({loading: false, ...music});
    }
  }).catch(error => {
    errorMusic(error);
  });
}

export function pagination() {
  const {query = {}, tracks = {}} = music.value || {};
  let {
    limit = 20,
    offset = 20,
    previous = null,
    next = null,
    total = 0,
  } = tracks||{};
  const current = parseInt(offset/limit) + 1;
  if (previous) previous = current - 1;
  if (next) next = current + 1;
  if (next > 100) next = null;
  let pages = Math.ceil(total/limit);
  if (pages > 100) pages = 100;
  const data = { query, current, limit, offset, previous, next, pages, total };
  // console.log('pagination:', data);
  return data;
}

append
.ref('music', music)
// .action('setMusic', setMusic)
.actions({
  setMusic,
  resetMusic,
  searchMusic,
  pagination,
})
