<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import AppHeader from '../../components/AppHeader.vue';
import { classInfo, type ClassInfo } from '@shared/classes';
import { miniText } from '../../mini-i18n';
import { store } from '../../store';

const role = ref('any');
const style = ref('solo');
const experience = ref('new');
const result = ref<ClassInfo[]>([]);
const status = ref('');
const text = computed(() => miniText[store.locale].classCopy);
const classes = computed(() => classInfo[store.locale]);

function calculate() {
  result.value = classes.value.map((item) => {
    let score = 0;
    if (role.value !== 'any') score += item.roles.includes(role.value as 'tank' | 'healer' | 'dps') ? 20 : -100;
    score += style.value === 'solo' ? item.solo * 3 : (item.roles.includes('tank') || item.roles.includes('healer') ? 8 : 2);
    score += experience.value === 'new' ? item.beginner * 3 : experience.value === 'returning' ? item.beginner : item.relaxed;
    return { item, score };
  }).filter((entry) => entry.score > -50).sort((a, b) => b.score - a.score).slice(0, 3).map((entry) => entry.item);
  status.value = '';
}
function copy() {
  const lines = result.value.map((item, index) => `${index + 1}. ${item.name} (${item.roleText}) — ${item.reason}`);
  uni.setClipboardData({ data: lines.join('\n'), success: () => { status.value = miniText[store.locale].copied; } });
}
watch(() => store.locale, () => { uni.setNavigationBarTitle({ title: store.locale === 'zh' ? '职业选择' : 'Class finder' }); if (result.value.length) calculate(); });
uni.setNavigationBarTitle({ title: '职业选择' });
</script>

<template>
  <view class="page">
    <AppHeader />
    <text class="eyebrow">CLASS FINDER</text><text class="section-title" style="font-size: 46rpx;">{{ text.title }}</text><text class="section-lead">{{ text.lead }}</text>
    <view class="answer"><text class="answer-label">{{ miniText[store.locale].answer }}</text><text class="answer-text">{{ text.answer }}</text></view>
    <view class="tool">
      <view class="field"><text class="field-label">{{ text.role }}</text><view class="choices"><button v-for="item in text.roles" :key="item.id" class="choice" :class="{ active: role === item.id }" @click="role = item.id">{{ item.label }}</button></view></view>
      <view class="field"><text class="field-label">{{ text.style }}</text><view class="choices"><button v-for="item in text.styles" :key="item.id" class="choice" :class="{ active: style === item.id }" @click="style = item.id">{{ item.label }}</button></view></view>
      <view class="field"><text class="field-label">{{ text.experience }}</text><view class="choices"><button v-for="item in text.experiences" :key="item.id" class="choice" :class="{ active: experience === item.id }" @click="experience = item.id">{{ item.label }}</button></view></view>
      <button class="button button-primary full-button" @click="calculate">{{ text.submit }} →</button>
      <view v-if="result.length" class="section">
        <view class="header"><text class="section-title">{{ text.result }}</text><button class="button button-secondary button-small" @click="copy">{{ miniText[store.locale].copy }}</button></view>
        <view v-for="(item, index) in result" :key="item.id" class="result-card"><text class="result-rank">#{{ index + 1 }}</text><text class="card-title">{{ item.name }}</text><text class="result-role">{{ item.roleText }}</text><text class="card-text">{{ item.reason }}</text></view>
        <view class="status" role="status">{{ status }}</view>
      </view>
    </view>
    <view class="section"><text class="section-title">{{ text.directory }}</text><view class="card-grid"><view v-for="item in classes" :key="item.id" class="card"><text class="card-title">{{ item.name }}</text><text class="result-role">{{ item.roleText }}</text><text class="card-text">{{ item.summary }}</text></view></view></view>
  </view>
</template>
