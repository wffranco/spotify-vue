import { useUser } from '@/store/user';
import MenuI18n from './MenuI18n';
import MenuOptions from './MenuOptions';
import MenuSearch from './MenuSearch';

export default {
  name: 'Menu',
  render() {
    const user = useUser();

    return (
      <>
        <button class="navbar-toggler" type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <MenuOptions />
          </ul>
          <ul class="navbar-nav">
            {user.value ? <MenuSearch /> : null}
            <MenuI18n />
          </ul>
        </div>
      </>
    );
  },
}
