import { h, onMounted } from 'vue';
import Layout from './components/Layout';
import { useActions, useStore, useStorage } from './store';
import { validateCode } from './store/token';
import { fetchUser } from './store/user';

export default {
  name: 'App',
  setup() {
    const actions = useActions();
    const storage = useStorage();
    const store = useStore();

    onMounted(async() => {
      await validateCode();
      await fetchUser();
    });

    // return { globals };
    return { actions, storage, store };
  },
  render: () => h(Layout),
};
