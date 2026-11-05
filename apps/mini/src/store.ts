import { reactive } from 'vue';

export type MiniLocale = 'zh' | 'en';

export const store = reactive<{ locale: MiniLocale }>({ locale: 'zh' });

export function restoreLocale() {
  const saved = uni.getStorageSync('forever60-locale');
  if (saved === 'zh' || saved === 'en') store.locale = saved;
}

export function toggleLocale() {
  store.locale = store.locale === 'zh' ? 'en' : 'zh';
  uni.setStorageSync('forever60-locale', store.locale);
}
