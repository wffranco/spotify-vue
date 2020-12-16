import { useI18n } from 'vue-i18n';
import { login, logout, useUser } from '@/store/user';

export default function MenuOptions() {
  const user = useUser();

  if (user.value === false) return;

  const { t } = useI18n();

  if (!user.value) {
    return (
      <li class="nav-item">
        <span class="nav-link" role="button" onClick={login}>{ t('login') }</span>
      </li>
    );
  }

  return (
    <li class="nav-item dropdown">
      <a
        id="userDropdown"
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        { user.value.display_name || t('user') }
      </a>
      <div class="dropdown-menu" aria-labelledby="userDropdown">
        <span class="dropdown-item" role="button" onClick={logout}>{ t('logout') }</span>
      </div>
    </li>
  );
}
