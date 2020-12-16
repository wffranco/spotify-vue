import { client_id, client_secret } from './keys';

export const app_name = 'spotify-vue';

export const api_url = 'https://api.spotify.com';
export const auth_url = 'https://accounts.spotify.com/authorize';
export const base_url = window.location.origin + window.location.pathname;

export const basic_token = btoa(`${client_id}:${client_secret}`);

export const login_url = `${auth_url}?client_id=${client_id}&response_type=code&redirect_uri=${base_url}`;
