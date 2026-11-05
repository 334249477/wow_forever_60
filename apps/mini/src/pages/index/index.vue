<script setup lang="ts">
import { computed, watch } from 'vue';
import AppHeader from '../../components/AppHeader.vue';
import { goTo } from '../../navigation';
import { miniText } from '../../mini-i18n';
import { store } from '../../store';

const text = computed(() => miniText[store.locale]);
const home = computed(() => text.value.homeCopy);
function setTitle() { uni.setNavigationBarTitle({ title: text.value.brand }); }
watch(() => store.locale, setTitle);
setTitle();
</script>

<template>
  <view class="page">
    <AppHeader />
    <view class="hero">
      <text class="eyebrow">{{ home.eyebrow }}</text>
      <text class="hero-title">{{ home.titleA }}</text><text class="hero-title accent">{{ home.titleB }}</text>
      <text class="hero-copy">{{ home.lead }}</text>
      <view class="button-row"><button class="button button-primary" @click="goTo('first-day')">{{ home.primary }}</button><button class="button button-secondary" @click="goTo('classes')">{{ home.secondary }}</button></view>
    </view>

    <view class="card info-card" @click="goTo('first-day')">
      <text class="tag orange">{{ home.live }}</text><text class="small muted">{{ home.launch }}</text>
      <text class="card-title" style="margin-top: 18rpx;">{{ home.quickTitle }}</text><text class="card-text">{{ home.quickText }}</text><text class="card-link">{{ home.quickLink }} →</text>
    </view>

    <view class="section">
      <text class="eyebrow">START HERE</text><text class="section-title">{{ home.section }}</text><text class="section-lead">{{ home.sectionLead }}</text>
      <view class="card-grid"><view v-for="(card, index) in home.cards" :key="card.slug" class="card" @click="goTo(card.slug)"><text class="tag">0{{ index + 1 }}</text><text class="card-title">{{ card.title }}</text><text class="card-text">{{ card.text }}</text><text class="card-link">{{ card.link }} →</text></view></view>
    </view>
    <view class="footer">{{ store.locale === 'zh' ? '非官方玩家网站 · 不拿猜测冒充实测 · 中英内容共用' : 'Unofficial fan project · No guesses presented as tested facts · Shared bilingual content' }}</view>
  </view>
</template>
