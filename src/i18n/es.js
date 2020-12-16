const names = {
  'es-ES': 'Español',
};

const langs = {
  'es-ES': {
    messages: {
      I18n: 'Internationalización',
      Search: 'Buscar',
      also_contains: 'contiene además',
      global_storage: 'almacenamiento global con provider (sin Vuex)',
      login: 'Ingresar',
      logout: 'Salir',
      source_code: 'Código fuente',
      spotify_demo: 'Demo de spotify.',
      user: 'Usuario',
      paginator: {
        prev: 'Anterior',
        next: 'Siguiente',
      },
    },
    datetimeFormats: {
      long: {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      },
    },
  },
};

export default {names, langs};
