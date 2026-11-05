<script setup lang="ts">
import { computed, ref } from 'vue';
import { campFeatures, type CampFeature } from '@shared/camps';
import { miniText } from '../mini-i18n';
import { store } from '../store';

const selected = ref<string[]>([]);
const status = ref('');
const text = computed(() => miniText[store.locale].campCopy);
const features = computed(() => campFeatures[store.locale]);
const chosen = computed(() => selected.value.map((id) => features.value.find((feature) => feature.id === id)).filter((feature): feature is CampFeature => Boolean(feature)));

function toggle(id: string) {
  status.value = '';
  if (selected.value.includes(id)) selected.value = selected.value.filter((item) => item !== id);
  else if (selected.value.length < 3) selected.value = [...selected.value, id];
}
function clear() { selected.value = []; status.value = ''; }
function copy() {
  if (!selected.value.length) return;
  const lines = [text.value.prefix, ...chosen.value.map((feature) => `- ${feature.profession} · ${feature.item}: ${feature.effect} (${feature.conflict})`), text.value.stay];
  uni.setClipboardData({ data: lines.join('\n'), success: () => { status.value = text.value.copied; } });
}
</script>

<template>
  <view class="tool">
    <text class="eyebrow">INTERACTIVE TOOL</text>
    <text class="section-title">{{ text.title }}</text>
    <text class="section-lead">{{ text.intro }}</text>
    <view class="profession-grid">
      <button v-for="feature in features" :key="feature.id" class="profession-button" :class="{ active: selected.includes(feature.id), disabled: selected.length >= 3 && !selected.includes(feature.id) }" :disabled="selected.length >= 3 && !selected.includes(feature.id)" @click="toggle(feature.id)"><text>{{ feature.profession }}</text><text class="camp-effect">{{ feature.item }}</text></button>
    </view>
    <view class="card info-card">
      <view class="header"><text class="card-title">{{ text.selected }}</text><text class="tag">{{ 3 - selected.length }} {{ text.slots }}</text></view>
      <view v-if="!chosen.length" class="empty">{{ text.empty }}</view>
      <view v-for="feature in chosen" :key="feature.id" class="camp-choice">
        <text class="card-title">{{ feature.profession }} · {{ feature.item }}</text>
        <text class="camp-effect">{{ feature.effect }}</text><text class="camp-effect">{{ text.conflict }}: {{ feature.conflict }}</text>
      </view>
      <view class="button-row full-button"><button class="button button-primary button-small" :disabled="!selected.length" @click="copy">{{ text.copy }}</button><button class="button button-secondary button-small" @click="clear">{{ miniText[store.locale].clear }}</button></view>
      <view class="status" role="status">{{ status }}</view>
    </view>
  </view>
</template>
