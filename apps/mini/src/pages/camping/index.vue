<script setup lang="ts">
import { computed, watch } from 'vue';
import AppHeader from '../../components/AppHeader.vue';
import CampBuilder from '../../components/CampBuilder.vue';
import { goTo } from '../../navigation';
import { miniText } from '../../mini-i18n';
import { store } from '../../store';

const text = computed(() => miniText[store.locale].campCopy);
watch(() => store.locale, () => uni.setNavigationBarTitle({ title: store.locale === 'zh' ? '营地搭配' : 'Camp builder' }));
uni.setNavigationBarTitle({ title: '营地搭配' });
</script>

<template>
  <view class="page">
    <AppHeader />
    <text class="eyebrow">CAMPING</text><text class="section-title" style="font-size: 44rpx;">{{ store.locale === 'zh' ? '先查冲突，再放营地设施' : 'Check buff conflicts before placing a feature' }}</text>
    <CampBuilder />
    <view class="card info-card" @click="goTo('camping')"><text class="card-title">{{ text.guide }}</text><text class="card-link">→</text></view>
  </view>
</template>
