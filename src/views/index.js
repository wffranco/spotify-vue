import About from './About';
import Home from './Home';
import Search from './Search';

const views = {
  About,
  Home,
  Search,
};

export function getViewRoute({name = null, component = null, ...route}) {
  if (component) {
    if (typeof component === 'string') {
      route.component = views[component];
      if (!name) {
        route.name = component;
      }
    } else {
      route.component = component;
    }
  }
  if (name) {
    route.name = name;
    if (!component) {
      route.component = views[name];
    }
  }
  return route;
}

export const getViewRoutes = routes => routes.map(route => getViewRoute(route));
