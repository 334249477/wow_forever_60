<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app';
import { restoreLocale } from './store';

onLaunch(() => {
  restoreLocale();
});
</script>

<style>
page { background: #f6f5f0; color: #172a28; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif; font-size: 28rpx; line-height: 1.65; }
view, text, button { box-sizing: border-box; }
button { margin: 0; padding: 0; border: 0; border-radius: 0; background: none; color: inherit; font: inherit; line-height: inherit; }
button::after { border: 0; }
.page { width: 100%; max-width: 980px; margin: 0 auto; padding: 28rpx; }
.header { display: flex; align-items: center; justify-content: space-between; gap: 20rpx; margin-bottom: 28rpx; }
.brand { display: flex; align-items: center; gap: 16rpx; }
.brand-mark { display: flex; align-items: center; justify-content: center; width: 76rpx; height: 76rpx; border-radius: 20rpx; background: #173f3a; color: #f5b95f; font-size: 30rpx; font-weight: 900; }
.brand-name { display: block; font-size: 34rpx; font-weight: 900; line-height: 1.2; }
.brand-sub { display: block; margin-top: 6rpx; color: #65736e; font-size: 16rpx; font-weight: 700; letter-spacing: 3rpx; }
.lang-button { min-width: 112rpx; min-height: 64rpx; padding: 12rpx 18rpx; border: 1px solid #c9cdc4; border-radius: 16rpx; background: #fff; color: #173f3a; font-size: 24rpx; font-weight: 700; }
.hero { padding: 48rpx 36rpx; border-radius: 32rpx; background: #173f3a; color: #fff; }
.eyebrow { margin-bottom: 20rpx; color: #df663c; font-size: 20rpx; font-weight: 800; letter-spacing: 2rpx; text-transform: uppercase; }
.hero .eyebrow { color: #f5b95f; }
.hero-title { display: block; margin-bottom: 24rpx; font-size: 60rpx; font-weight: 900; line-height: 1.2; letter-spacing: -2rpx; }
.hero-title.accent { color: #f5b95f; }
.hero-copy { display: block; margin-bottom: 32rpx; color: #cedbd5; font-size: 28rpx; }
.button-row { display: flex; flex-wrap: wrap; gap: 16rpx; }
.button { display: flex; align-items: center; justify-content: center; min-height: 82rpx; padding: 18rpx 26rpx; border: 1px solid transparent; border-radius: 18rpx; font-size: 27rpx; font-weight: 800; line-height: 1.3; }
.button-primary { background: #df663c; color: #fff; }
.button-secondary { border-color: #c9cdc4; background: #fff; color: #173f3a; }
.hero .button-secondary { border-color: #6f8580; background: transparent; color: #fff; }
.button-small { min-height: 64rpx; padding: 12rpx 20rpx; font-size: 23rpx; }
.section { margin-top: 40rpx; }
.section-title { display: block; margin-bottom: 10rpx; font-size: 38rpx; font-weight: 850; line-height: 1.3; }
.section-lead { display: block; margin-bottom: 24rpx; color: #65736e; font-size: 25rpx; }
.card-grid { display: grid; grid-template-columns: 1fr; gap: 20rpx; }
.card { padding: 28rpx; border: 1px solid #dedfd8; border-radius: 24rpx; background: #fff; }
.card-title { display: block; margin-bottom: 10rpx; font-size: 31rpx; font-weight: 800; line-height: 1.4; }
.card-text { display: block; color: #65736e; font-size: 25rpx; }
.card-link { display: block; margin-top: 20rpx; color: #173f3a; font-size: 24rpx; font-weight: 800; }
.tag { display: inline-flex; width: fit-content; margin-bottom: 14rpx; padding: 6rpx 14rpx; border-radius: 999rpx; background: #e7efeb; color: #173f3a; font-size: 20rpx; font-weight: 800; }
.tag.orange { background: #fff0e8; color: #b84927; }
.answer { margin-top: 28rpx; padding: 28rpx; border: 1px solid #cddbd3; border-radius: 22rpx; background: #edf3ef; }
.answer-label { display: block; margin-bottom: 10rpx; color: #2c745d; font-size: 22rpx; font-weight: 850; }
.answer-text { display: block; font-size: 28rpx; font-weight: 650; }
.muted { color: #65736e; }
.small { font-size: 22rpx; }
.tool { margin-top: 28rpx; padding: 28rpx; border: 1px solid #dedfd8; border-radius: 24rpx; background: #fff; }
.field { margin-top: 24rpx; }
.field-label { display: block; margin-bottom: 12rpx; color: #65736e; font-size: 23rpx; font-weight: 750; }
.choices { display: flex; flex-wrap: wrap; gap: 12rpx; }
.choice { padding: 14rpx 20rpx; border: 1px solid #c9cdc4; border-radius: 14rpx; background: #fafaf7; font-size: 24rpx; }
.choice.active { border-color: #173f3a; background: #173f3a; color: #fff; }
.full-button { width: 100%; margin-top: 28rpx; }
.result-card { margin-top: 18rpx; padding: 26rpx; border: 1px solid #dedfd8; border-radius: 20rpx; background: #fafaf7; }
.result-card:first-child { border-color: #d9b193; background: #fff0e8; }
.result-rank { display: block; margin-bottom: 8rpx; color: #65736e; font-size: 20rpx; font-weight: 800; }
.result-role { display: block; margin: 6rpx 0 12rpx; color: #b84927; font-size: 22rpx; font-weight: 750; }
.guide-block { margin-top: 42rpx; }
.guide-block > .section-title { margin-bottom: 18rpx; }
.paragraph { display: block; margin-bottom: 16rpx; color: #43534d; }
.bullet { display: flex; gap: 14rpx; margin-bottom: 16rpx; color: #43534d; }
.bullet::before { content: "•"; color: #df663c; font-weight: 900; }
.note { margin-top: 20rpx; padding: 22rpx; border-left: 6rpx solid #df663c; border-radius: 0 16rpx 16rpx 0; background: #fff0e8; }
.note-title { display: block; margin-bottom: 6rpx; color: #b84927; font-weight: 800; }
.note-text { display: block; color: #53615b; font-size: 25rpx; }
.info-card { margin-top: 16rpx; }
.table-card { margin-top: 18rpx; overflow: hidden; }
.table-row { padding: 22rpx; border-bottom: 1px solid #dedfd8; }
.table-row:last-child { border-bottom: 0; }
.table-cell { display: block; margin-top: 12rpx; }
.table-cell:first-child { margin-top: 0; }
.table-head { display: block; margin-bottom: 4rpx; color: #65736e; font-size: 19rpx; font-weight: 750; }
.table-value { display: block; font-size: 25rpx; }
.table-cell:first-child .table-value { color: #173f3a; font-weight: 800; }
.progress { margin: 18rpx 0; color: #65736e; font-size: 23rpx; }
.check-item { display: flex; align-items: flex-start; gap: 16rpx; margin-top: 14rpx; padding: 22rpx; border: 1px solid #dedfd8; border-radius: 16rpx; background: #fff; }
.check-box { display: flex; align-items: center; justify-content: center; flex-shrink: 0; width: 34rpx; height: 34rpx; margin-top: 3rpx; border: 2rpx solid #9eaaa3; border-radius: 7rpx; color: #fff; font-size: 24rpx; }
.check-item.checked { background: #edf3ef; }
.check-item.checked .check-box { border-color: #2c745d; background: #2c745d; }
.check-item.checked .check-text { color: #65736e; text-decoration: line-through; }
.source { margin-top: 36rpx; padding: 22rpx; border-radius: 16rpx; background: #e9ece6; color: #53615b; font-size: 23rpx; }
.source-link { margin-top: 10rpx; color: #173f3a; font-weight: 800; text-decoration: underline; }
.profession-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14rpx; }
.profession-button { min-height: 104rpx; padding: 12rpx 8rpx; border: 1px solid #dedfd8; border-radius: 16rpx; background: #fafaf7; font-size: 23rpx; font-weight: 750; }
.profession-button.active { border-color: #173f3a; background: #173f3a; color: #fff; }
.profession-button.disabled { opacity: .45; }
.camp-choice { margin-top: 14rpx; padding: 20rpx; border: 1px solid #d2dfd7; border-radius: 14rpx; background: #fff; }
.camp-effect { display: block; margin-top: 6rpx; color: #65736e; font-size: 23rpx; }
.status { min-height: 34rpx; margin-top: 14rpx; color: #2c745d; font-size: 23rpx; }
.empty { padding: 20rpx 0; color: #65736e; }
.footer { margin: 50rpx 0 20rpx; color: #758079; font-size: 20rpx; text-align: center; }
@media (min-width: 760px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
  .hero { padding: 56rpx; }
}
</style>
