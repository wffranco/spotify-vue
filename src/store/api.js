import { api_url } from '../consts';
import { append } from '.';
import { useToken } from './token';

const token = useToken();

function url(path) {
  if (typeof path !== 'string' || /^\w+:\/\//.test(path)) return path;

  const trim = path.replace(/^\/|\/$/g, '').replace(/\/\/+/g, '/');
  return `${api_url}/${trim}`;
}

export async function api(resource, init = {}) {
  const t = token.value || {};
  const auth = ['token_type','access_token']
    .map(el => el in t ? t[el] : '')
    .join(' ');

  const response = await fetch(url(resource), {
    ...init,
    headers: {
      'Authorization': auth,
      'Content-Type': 'application/json',
      ...init.headers,
    },
  });
  if (parseInt(response.status/100) !== 2) throw response;
  return response.json();
}

append.action('api', api);
