<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import AppHeader from '../../components/AppHeader.vue';
import CampBuilder from '../../components/CampBuilder.vue';
import GuideBlocks from '../../components/GuideBlocks.vue';
import { guides } from '@shared/guides';
import { goTo, openSource } from '../../navigation';
import { miniText } from '../../mini-i18n';
import { store } from '../../store';

const slug = ref('first-day');
const guide = computed(() => guides.find((item) => item.locale === store.locale && item.slug === slug.value) ?? guides.find((item) => item.locale === store.locale && item.slug === 'first-day')!);
const text = computed(() => miniText[store.locale]);
onLoad((options) => { if (typeof options?.slug === 'string') slug.value = options.slug; });
watch(guide, (value) => { uni.setNavigationBarTitle({ title: value.shortTitle }); }, { immediate: true });
</script>

<template>
  <view class="page">
    <AppHeader />
    <text class="eyebrow">{{ guide.eyebrow }}</text><text class="hero-title" style="color: #173f3a;">{{ guide.heading }}</text><text class="section-lead">{{ guide.lead }}</text>
    <view class="small muted">{{ text.updated }} {{ guide.updated }} · {{ text.official }}</view>
    <CampBuilder v-if="guide.slug === 'camping'" />
    <GuideBlocks :key="`${guide.locale}-${guide.slug}`" :guide="guide" :locale="store.locale" />

    <view class="source">
      <text>{{ store.locale === 'zh' ? '本文按官方资料整理，编辑建议单独标注；正式服热修以游戏内为准。' : 'Based on official material, with editorial advice identified separately. Live hotfixes take precedence.' }}</text>
      <view class="source-link" @click="openSource(guide.source)">{{ text.source }} →</view>
      <view v-for="item in guide.sources" :key="item.url" class="source-link" @click="openSource(item.url)">{{ item.label }} →</view>
    </view>
    <view class="card info-card"><text class="tag">{{ text.next }}</text><text class="card-title">{{ guide.next.title }}</text><button class="button button-primary button-small" style="margin-top: 18rpx;" @click="goTo(guide.next.slug)">{{ guide.next.label }} →</button></view>
    <view class="footer">{{ text.brand }} · Forever 60</view>
  </view>
</template>
