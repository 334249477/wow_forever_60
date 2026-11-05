<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import type { Guide, GuideBlock } from '@shared/guides';
import { miniText } from '../mini-i18n';
import { store, type MiniLocale } from '../store';

const props = defineProps<{ guide: Guide; locale: MiniLocale }>();
const checked = reactive<Record<string, boolean>>({});
const text = () => miniText[store.locale];

function storageKey(blockId: string) {
  return `mini-${props.locale}-${props.guide.slug}-${blockId}`;
}
function itemKey(blockId: string, index: number) {
  return `${blockId}-${index}`;
}
function toggleItem(blockId: string, index: number) {
  const key = itemKey(blockId, index);
  checked[key] = !checked[key];
  const block = props.guide.blocks.find((item) => item.id === blockId);
  if (!block || block.type !== 'checklist') return;
  const saved = block.items.map((_, itemIndex) => itemKey(blockId, itemIndex)).filter((id) => checked[id]);
  uni.setStorageSync(storageKey(blockId), saved);
}
function checkedCount(block: GuideBlock) {
  if (block.type !== 'checklist') return 0;
  return block.items.filter((_, index) => checked[itemKey(block.id, index)]).length;
}
onMounted(() => {
  props.guide.blocks.filter((block) => block.type === 'checklist').forEach((block) => {
    const saved = uni.getStorageSync(storageKey(block.id));
    if (Array.isArray(saved)) saved.forEach((id) => { checked[id] = true; });
  });
});
</script>

<template>
  <view class="answer">
    <text class="answer-label">{{ text().answer }}</text>
    <text class="answer-text">{{ guide.answer }}</text>
  </view>

  <view v-for="block in guide.blocks" :key="block.id" class="guide-block">
    <text class="section-title">{{ block.title }}</text>
    <text v-if="block.intro" class="paragraph">{{ block.intro }}</text>

    <view v-if="block.type === 'text'">
      <text v-for="(paragraph, index) in block.paragraphs" :key="index" class="paragraph">{{ paragraph }}</text>
      <view v-for="(item, index) in block.bullets" :key="`bullet-${index}`" class="bullet"><text>{{ item }}</text></view>
    </view>

    <view v-else-if="block.type === 'steps'">
      <view v-for="(item, index) in block.items" :key="index" class="card info-card">
        <text class="tag">0{{ index + 1 }}</text><text class="card-title">{{ item.title }}</text><text class="card-text">{{ item.text }}</text>
      </view>
    </view>

    <view v-else-if="block.type === 'cards'">
      <view v-for="(item, index) in block.items" :key="index" class="card info-card">
        <text v-if="item.tag" class="tag" :class="{ orange: item.tagStyle === 'orange' }">{{ item.tag }}</text>
        <text class="card-title">{{ item.title }}</text><text class="card-text">{{ item.text }}</text>
      </view>
    </view>

    <view v-else-if="block.type === 'table'" class="card table-card">
      <view v-for="(row, rowIndex) in block.rows" :key="rowIndex" class="table-row">
        <view v-for="(cell, cellIndex) in row" :key="cellIndex" class="table-cell">
          <text class="table-head">{{ block.headers[cellIndex] }}</text><text class="table-value">{{ cell }}</text>
        </view>
      </view>
    </view>

    <view v-else-if="block.type === 'checklist'">
      <view class="progress">{{ checkedCount(block) }} / {{ block.items.length }}</view>
      <view v-for="(item, index) in block.items" :key="index" class="check-item" :class="{ checked: checked[itemKey(block.id, index)] }" @click="toggleItem(block.id, index)">
        <view class="check-box">{{ checked[itemKey(block.id, index)] ? '✓' : '' }}</view><text class="check-text">{{ item }}</text>
      </view>
    </view>

    <view v-if="block.note" class="note"><text class="note-title">{{ block.note.title }}</text><text class="note-text">{{ block.note.text }}</text></view>
  </view>
</template>
