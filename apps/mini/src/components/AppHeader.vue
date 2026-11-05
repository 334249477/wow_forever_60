<script setup lang="ts">
import { computed } from 'vue';
import { goHome } from '../navigation';
import { miniText } from '../mini-i18n';
import { store, toggleLocale } from '../store';

const text = computed(() => miniText[store.locale]);
</script>

<template>
  <view class="header">
    <button class="brand" aria-label="首页" @click="goHome">
      <view class="brand-mark">60</view>
      <view><text class="brand-name">{{ text.brand }}</text><text class="brand-sub">FOREVER 60</text></view>
    </button>
    <button class="lang-button" @click="toggleLocale">{{ text.language }}</button>
  </view>
</template>
