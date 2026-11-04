import type { Locale } from '../i18n';

export type Role = 'tank' | 'healer' | 'dps';

export interface ClassInfo {
  id: string;
  name: string;
  roles: Role[];
  roleText: string;
  summary: string;
  solo: number;
  beginner: number;
  relaxed: number;
  reason: string;
}

export const classInfo: Record<Locale, ClassInfo[]> = {
  zh: [
    { id: 'hunter', name: '猎人', roles: ['dps'], roleText: '远程输出', summary: '宠物能承担前线压力，单人任务容易上手，适合先熟悉世界。', solo: 5, beginner: 5, relaxed: 5, reason: '宠物和远程战斗让独狼练级更从容，操作入门也相对直观。' },
    { id: 'paladin', name: '圣骑士', roles: ['tank', 'healer', 'dps'], roleText: '坦克 / 治疗 / 近战输出', summary: '三种职责都能体验，生存与辅助能力强，适合想多尝试玩法的玩家。', solo: 4, beginner: 4, relaxed: 5, reason: '能坦、能奶、能输出，回复与保护手段让新手有更高的容错。' },
    { id: 'druid', name: '德鲁伊', roles: ['tank', 'healer', 'dps'], roleText: '坦克 / 治疗 / 输出', summary: '变形带来多种职责和移动方式，适合喜欢变化、不想被单职责绑住的人。', solo: 5, beginner: 3, relaxed: 4, reason: '变形和多职责提供很高的玩法弹性，但也需要理解不同形态。' },
    { id: 'warlock', name: '术士', roles: ['dps'], roleText: '远程输出', summary: '宠物、持续伤害和回复能力适合持续作战，资源管理比猎人更复杂。', solo: 5, beginner: 4, relaxed: 4, reason: '宠物加持续伤害适合单人连续任务，生命与法力转换需要一点经验。' },
    { id: 'priest', name: '牧师', roles: ['healer', 'dps'], roleText: '治疗 / 远程输出', summary: '经典治疗核心，也能走输出路线；适合愿意为队伍提供稳定支援的人。', solo: 3, beginner: 3, relaxed: 3, reason: '治疗职责清楚、队伍价值稳定，单人时更需要注意法力与生存。' },
    { id: 'shaman', name: '萨满祭司', roles: ['healer', 'dps'], roleText: '治疗 / 输出', summary: '图腾和混合职责提供独特团队价值，适合喜欢支援又不想只治疗的人。', solo: 3, beginner: 3, relaxed: 3, reason: '图腾和增益让小队受益，混合玩法需要同时留意多种资源与站位。' },
    { id: 'mage', name: '法师', roles: ['dps'], roleText: '远程输出', summary: '控制、传送和自制食物很实用，但站位与控制失误更容易付出代价。', solo: 3, beginner: 3, relaxed: 2, reason: '控制和便利能力很强，适合愿意学习站位、距离和法力管理的玩家。' },
    { id: 'rogue', name: '潜行者', roles: ['dps'], roleText: '近战输出', summary: '潜行和控制让单人玩法有主动性，近战站位与能量管理要求更高。', solo: 4, beginner: 2, relaxed: 2, reason: '潜行能绕开部分麻烦，但正面容错不高，更适合喜欢主动规划遭遇的玩家。' },
    { id: 'warrior', name: '战士', roles: ['tank', 'dps'], roleText: '坦克 / 近战输出', summary: '坦克和近战打击感鲜明，装备与资源依赖更强，适合有固定队伍的人。', solo: 2, beginner: 2, relaxed: 1, reason: '组队坦克价值突出；独狼开局更依赖装备和补给，不建议只为强度硬选。' },
  ],
  en: [
    { id: 'hunter', name: 'Hunter', roles: ['dps'], roleText: 'Ranged damage', summary: 'A pet handles the front line, making solo quests approachable while you learn the world.', solo: 5, beginner: 5, relaxed: 5, reason: 'A pet and ranged combat make solo leveling forgiving, with a relatively clear starting rotation.' },
    { id: 'paladin', name: 'Paladin', roles: ['tank', 'healer', 'dps'], roleText: 'Tank / Healer / Melee damage', summary: 'All three roles, strong survival and group utility for players who want options.', solo: 4, beginner: 4, relaxed: 5, reason: 'All three roles plus healing and protection give a new player room for mistakes.' },
    { id: 'druid', name: 'Druid', roles: ['tank', 'healer', 'dps'], roleText: 'Tank / Healer / Damage', summary: 'Shapeshifting opens multiple roles and movement options without locking you into one job.', solo: 5, beginner: 3, relaxed: 4, reason: 'Forms and multiple roles offer exceptional flexibility, but ask you to understand each form.' },
    { id: 'warlock', name: 'Warlock', roles: ['dps'], roleText: 'Ranged damage', summary: 'A pet, damage over time and self-sustain support long fights, with more resource management than Hunter.', solo: 5, beginner: 4, relaxed: 4, reason: 'A pet and damage over time work well alone; health and mana conversion add a little to learn.' },
    { id: 'priest', name: 'Priest', roles: ['healer', 'dps'], roleText: 'Healer / Ranged damage', summary: 'A cornerstone healer with a damage path for players who value reliable group support.', solo: 3, beginner: 3, relaxed: 3, reason: 'A clear healing role and steady group value; solo play asks for more mana and survival awareness.' },
    { id: 'shaman', name: 'Shaman', roles: ['healer', 'dps'], roleText: 'Healer / Damage', summary: 'Totems and hybrid roles offer distinctive group value beyond simply healing.', solo: 3, beginner: 3, relaxed: 3, reason: 'Totems and buffs help a group, while hybrid play asks you to watch resources and positioning.' },
    { id: 'mage', name: 'Mage', roles: ['dps'], roleText: 'Ranged damage', summary: 'Control, teleports and conjured food are useful, but positioning mistakes are less forgiving.', solo: 3, beginner: 3, relaxed: 2, reason: 'Excellent control and convenience for players willing to learn spacing, distance and mana management.' },
    { id: 'rogue', name: 'Rogue', roles: ['dps'], roleText: 'Melee damage', summary: 'Stealth and control let you choose fights, while melee positioning and energy demand more attention.', solo: 4, beginner: 2, relaxed: 2, reason: 'Stealth can bypass trouble, but direct fights are less forgiving. Best if you enjoy planning each pull.' },
    { id: 'warrior', name: 'Warrior', roles: ['tank', 'dps'], roleText: 'Tank / Melee damage', summary: 'A distinctive tank and melee experience with stronger gear and resource dependence.', solo: 2, beginner: 2, relaxed: 1, reason: 'A valuable group tank; solo starts depend more on gear and supplies. Do not pick it only for perceived power.' },
  ],
};
