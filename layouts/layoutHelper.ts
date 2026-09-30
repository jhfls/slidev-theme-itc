import type { CSSProperties } from 'vue';
import bg from './assets/bg.png?url';

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1);
  return url;
}

export function handleBackground(background = bg, dim = false): CSSProperties {
  const isColor = background && ['#', 'rgb', 'hsl'].some(v => background.indexOf(v) === 0);

  const style = {
    background: isColor
      ? background
      : undefined,
    color: background
      ? isColor
        ? 'unset'
        : 'white'
      : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? dim
          ? `linear-gradient(#0005, #0008), url(${CSS.escape(resolveAssetUrl(background))})`
          : `url("${CSS.escape(resolveAssetUrl(background))}")`
        : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  if (!style.background)
    delete style.background;

  return style;
}
