import Icon from '@/components/Icon';

export default function Brand() {
  return (
    <router-link to="/" class="navbar-brand mt-n1">
      <Icon type="logo" />
      <small class="ml-1">Demo</small>
    </router-link>
  );
}
