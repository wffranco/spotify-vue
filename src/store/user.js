import { readonly, ref } from 'vue';
import { login_url } from '../consts';
import { append } from '.';
import { api } from './api';
import { refToken } from './token'

const token = refToken();
const user = ref(false);

export const refUser = () => user;
export const useUser = () => readonly(user);

export function setUser(value) {
  user.value = value;
}

export function login() {
  window.location = login_url;
}

export function logout() {
  token.value = null;
  user.value = null;
}

export async function fetchUser() {
  console.log('fetchUser');
  console.log('token:', token.value);
  if (!token.value) {
    user.value = null;
    return;
  }

  if (user.value !== false) user.value = false;
  return await api('v1/me').then(usr => {
    console.log('user:', usr);
    user.value = usr;
  }).catch(error => {
    console.log('error status:', error.status);
    user.value = null;
    if (error.error) {
      console.log('unauthorized user');
      token.value = null;
    } else {
      console.log('error:', error);
    }
  });
}

append
.ref('user', user)
.actions({
  setUser,
  login,
  logout,
  fetchUser,
});
