export function goTo(slug: string) {
  if (slug === 'classes') {
    uni.navigateTo({ url: '/pages/classes/index' });
    return;
  }
  if (slug === 'camping') {
    uni.navigateTo({ url: '/pages/camping/index' });
    return;
  }
  uni.navigateTo({ url: `/pages/guide/index?slug=${slug}` });
}

export function goHome() {
  uni.reLaunch({ url: '/pages/index/index' });
}

export function openSource(url: string) {
  // #ifdef H5
  window.open(url, '_blank', 'noopener,noreferrer');
  // #endif
  // #ifndef H5
  uni.setClipboardData({ data: url, success: () => uni.showToast({ title: '链接已复制', icon: 'none' }) });
  // #endif
}
