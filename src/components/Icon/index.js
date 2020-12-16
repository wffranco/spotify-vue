import icons from './icons';

export default function Icon({type, height = null, width = null, style = {}, ...props}) {
  if (style instanceof Array) {
    style.push({width, height});
  } else if (style instanceof Object) {
    style = {...style, width, height};
  } else {
    style = [style, {width, height}];
  }

  // kebab-case => camelCase
  if (/-[a-z]/.test(type)) type = type.replace(/-([a-z])/g, (m, r) => r.toUpperCase());

  if (!icons[type]) return;

  return icons[type]({
    ...props,
    style,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 16 16',
  });
}
