import type { Locale } from '@/lib/i18n';

function toEnPath(pathname: string): string {
  if (pathname.startsWith('/en')) return pathname; // already en
  if (pathname === '/' || pathname === '/zh' || pathname === '/zh/') return '/en/';
  if (pathname.startsWith('/zh')) return pathname.replace(/^\/zh\b/, '/en');
  return `/en${pathname}`; // a fallback
}

function toZhPath(pathname: string): string {
  if (pathname.startsWith('/en')) return pathname.replace(/^\/en\b/, '/zh');
  return pathname === '/' ? '/' : pathname; // root is zh
}

export function buildCanonical(site: string, pathname: string): string {
  // zh root 使用 '/', 其餘照 pathname
  const url = new URL(pathname === '/zh' || pathname === '/zh/' ? '/' : pathname, site);
  return url.toString();
}

export function buildAlternates(site: string, pathname: string) {
  const zhURL = new URL(toZhPath(pathname), site).toString();
  const enURL = new URL(toEnPath(pathname), site).toString();
  return [
    { href: zhURL, hreflang: 'zh-Hant' },
    { href: enURL, hreflang: 'en' },
    { href: zhURL, hreflang: 'x-default' }, // 預設導向中文
  ];
}

/** 產生 head 片段用的物件（在 BaseLayout.astro 使用） */
export function headMeta(
  site: string,
  pathname: string,
  title: string,
  description: string,
  locale: Locale,
) {
  return {
    htmlLang: locale === 'en' ? 'en' : 'zh-Hant',
    canonical: buildCanonical(site, pathname),
    alternates: buildAlternates(site, pathname),
    title,
    description,
  };
}
