import { computed } from 'vue';
import { watchOnce } from '../utils';
import { append } from '.';
import { useToken } from './token'
import { useUser } from './user';

const token = useToken();
const user = useUser();

const auth = computed(() => token.value && user.value instanceof Object);

export const useAuth = () => auth;

export const authMiddleware = (next, redirectTo = {name: 'Home'}) => new Promise((resolve, reject) => {
  const validate = () => {
    if (user.value instanceof Object) return resolve(next);
    next(redirectTo);
    reject(new Error('Unauthorized'));
  };

  if (user.value !== false) return validate();

  watchOnce(user, validate);
});

append
.ref('auth', auth)
