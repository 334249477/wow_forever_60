import type { Locale } from '../i18n';

export interface CampFeature {
  id: string;
  profession: string;
  item: string;
  effect: string;
  conflict: string;
}

export const campFeatures: Record<Locale, CampFeature[]> = {
  zh: [
    { id: 'first-aid', profession: '急救', item: '急救包', effect: '耐力提高3—56点（随等级变化）', conflict: '与真言术：韧互斥' },
    { id: 'fishing', profession: '钓鱼', item: '钓鱼碗', effect: '全属性提高8%', conflict: '与王者祝福互斥' },
    { id: 'alchemy', profession: '炼金术', item: '法力之井', effect: '每5秒回复10—29点法力值（随等级变化）', conflict: '与智慧祝福互斥' },
    { id: 'blacksmithing', profession: '锻造', item: '磨刀轮', effect: '力量提高6—34点（随等级变化）', conflict: '与大地之力图腾互斥' },
    { id: 'enchanting', profession: '附魔', item: '魔法鲁特琴', effect: '护甲、全属性和抗性提高（随等级变化）', conflict: '与野性印记互斥' },
    { id: 'engineering', profession: '工程学', item: '材料机器人', effect: '附近玩家可以购买施法材料', conflict: '无数值增益，不冲突' },
    { id: 'herbalism', profession: '草药学', item: '熏香蜡烛', effect: '智力提高2—25点（随等级变化）', conflict: '与奥术智慧互斥' },
    { id: 'leatherworking', profession: '制皮', item: '营地帐篷', effect: '精力充沛经验增加当前等级的5%', conflict: '已有更多精力充沛经验时无效' },
    { id: 'skinning', profession: '剥皮', item: '营地椅', effect: '所有法术和攻击的爆击几率提高2%', conflict: '与枭兽光环互斥' },
    { id: 'tailoring', profession: '裁缝', item: '阵营旗帜', effect: '精神提高14—32点（随等级变化）', conflict: '与精神祷言互斥' },
  ],
  en: [
    { id: 'first-aid', profession: 'First Aid', item: 'First Aid Kit', effect: '+3—56 Stamina, depending on level', conflict: 'Exclusive with Power Word: Fortitude' },
    { id: 'fishing', profession: 'Fishing', item: 'Fishing Bowl', effect: '+8% to all stats', conflict: 'Exclusive with Blessing of Kings' },
    { id: 'alchemy', profession: 'Alchemy', item: 'Mana Well', effect: 'Regenerate 10—29 mana every 5 seconds', conflict: 'Exclusive with Blessing of Wisdom' },
    { id: 'blacksmithing', profession: 'Blacksmithing', item: 'Sharpening Wheel', effect: '+6—34 Strength, depending on level', conflict: 'Exclusive with Strength of Earth Totem' },
    { id: 'enchanting', profession: 'Enchanting', item: 'Enchanted Lute', effect: 'Increased armor, all stats and resistances', conflict: 'Exclusive with Mark of the Wild' },
    { id: 'engineering', profession: 'Engineering', item: 'Reagent Bot', effect: 'Nearby players can purchase reagents', conflict: 'Utility only; no buff conflict' },
    { id: 'herbalism', profession: 'Herbalism', item: 'Incense Candle', effect: '+2—25 Intellect, depending on level', conflict: 'Exclusive with Arcane Intellect' },
    { id: 'leatherworking', profession: 'Leatherworking', item: 'Camp Tent', effect: 'Adds rested experience worth 5% of a level', conflict: 'No effect above that rested threshold' },
    { id: 'skinning', profession: 'Skinning', item: 'Camp Chair', effect: '+2% critical strike chance for attacks and spells', conflict: 'Exclusive with Moonkin Aura' },
    { id: 'tailoring', profession: 'Tailoring', item: 'Faction Banner', effect: '+14—32 Spirit, depending on level', conflict: 'Exclusive with Divine Spirit' },
  ],
};
