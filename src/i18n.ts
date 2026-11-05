export const locales = ['zh', 'en'] as const;
export type Locale = (typeof locales)[number];

export const siteNames: Record<Locale, string> = {
  zh: '无限60',
  en: 'Forever 60',
};

export const ui = {
  zh: {
    skip: '跳到正文',
    tagline: '魔兽世界无限服玩家攻略',
    switchLanguage: 'English',
    switchLabel: '切换到英文',
    menu: '打开菜单',
    close: '关闭菜单',
    updated: '更新于',
    official: '官方资料整理',
    verified: '正式服实测陆续补充',
    source: '查看官方来源',
    home: '首页',
    backHome: '返回首页',
    readGuide: '查看攻略',
    copy: '复制',
    copied: '已复制',
    notOfficial: '非官方玩家网站，与暴雪娱乐无关。游戏名称与相关商标归各自权利人所有。',
    footerNote: '不写空话，不拿猜测冒充实测。每篇攻略都标明来源和更新时间。',
    dataNote: '资料版本：2026-11-05 · 正式服数据核验中',
    nav: {
      'first-day': '首日攻略',
      classes: '选职业',
      leveling: '练级路线',
      legacy: '传承点数',
      camping: '营地搭配',
      launch: '开服清单',
    },
  },
  en: {
    skip: 'Skip to content',
    tagline: 'Player-made WoW Forever guides',
    switchLanguage: '中文',
    switchLabel: 'Switch to Chinese',
    menu: 'Open menu',
    close: 'Close menu',
    updated: 'Updated',
    official: 'Based on official sources',
    verified: 'Live-server verification in progress',
    source: 'View official source',
    home: 'Home',
    backHome: 'Back home',
    readGuide: 'Read guide',
    copy: 'Copy',
    copied: 'Copied',
    notOfficial: 'An unofficial fan site, not affiliated with Blizzard Entertainment. Game names and trademarks belong to their respective owners.',
    footerNote: 'No filler and no guesses presented as tested facts. Every guide lists its sources and update date.',
    dataNote: 'Source review: November 5, 2026 · Live data being verified',
    nav: {
      'first-day': 'First day',
      classes: 'Classes',
      leveling: 'Leveling',
      legacy: 'Legacy',
      camping: 'Camping',
      launch: 'Launch prep',
    },
  },
} as const;

export function localizedPath(locale: Locale, slug = '') {
  return `/${locale}/${slug ? `${slug}/` : ''}`;
}

export function alternatePath(pathname: string, target: Locale) {
  if (pathname === '/') return target === 'zh' ? '/zh/' : '/en/';
  const match = pathname.match(/^\/(zh|en)(\/.*)?$/);
  return `/${target}${match?.[2] ?? '/'}`;
}

export function navItems(locale: Locale) {
  return (['first-day', 'classes', 'leveling', 'legacy', 'camping', 'launch'] as const).map((slug) => ({
    slug,
    label: ui[locale].nav[slug],
    href: localizedPath(locale, slug),
  }));
}
