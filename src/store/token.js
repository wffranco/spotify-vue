import { readonly } from 'vue';
import { base_url, basic_token } from '@/consts';
import { append, local } from '.';
import { api } from './api';

const STORAGE = 'token';

const token = local(STORAGE, null);

export const refToken = () => token;
export const useToken = () => readonly(token);

export function setToken(value) {
  token.value = value;
}

export async function validateCode() {
  console.log('validateCode');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('code');
  console.log('code:', code);
  if (!code) return;

  token.value = null;
  const response = await api('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic_token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=authorization_code&code=${code}&redirect_uri=${base_url}`,
  });
  const { access_token, token_type } = response;

  if (access_token && token_type) {
    token.value = {
      token_type,
      access_token,
    };
    window.location = `${base_url}${window.location.hash}`;
  }
}

append
.ref('token', token)
.actions({
  setToken,
  validateCode,
});
