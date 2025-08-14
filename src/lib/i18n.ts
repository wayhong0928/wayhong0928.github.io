import zh from '@/i18n/zh.json';
import en from '@/i18n/en.json';

export type Locale = 'zh' | 'en';
const dict = { zh, en } as const;

/** 從路徑判斷語系：/en/... = en，其餘 = zh */
export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'zh';
}

/** 翻譯函式：t('nav.projects', 'zh') -> '作品集' */
export function t(key: string, locale: Locale = 'zh'): string {
  const parts = key.split('.');
  let cur: any = dict[locale];
  for (const p of parts) cur = cur?.[p];
  return (typeof cur === 'string' ? cur : key) as string;
}

export default t;
