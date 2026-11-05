import type { Locale } from '../i18n';
import { campFeatures } from './camps';
import { firstDayGuides } from './first-day';

interface BlockBase {
  id: string;
  title: string;
  intro?: string;
  note?: { title: string; text: string };
}

export type GuideBlock = BlockBase & (
  | { type: 'text'; paragraphs?: string[]; bullets?: string[] }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'cards'; items: { title: string; text: string; tag?: string; tagStyle?: 'orange' }[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'checklist'; items: string[] }
);

export interface Guide {
  locale: Locale;
  slug: 'first-day' | 'launch' | 'rulesets' | 'leveling' | 'legacy' | 'camping';
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  answer: string;
  updated: string;
  source: string;
  sources?: { label: string; url: string }[];
  blocks: GuideBlock[];
  next: { slug: string; title: string; label: string };
}

const launchSource = 'https://worldofwarcraft.blizzard.com/en-us/news/24315820/world-of-warcraft-forever-goes-live-globally-november-4';
const systemsSource = 'https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap';
const legacySource = 'https://news.blizzard.com/en-us/article/24307383/get-to-know-the-world-of-warcraft-forever-legacy-system';
const campingSource = 'https://worldofwarcraft.blizzard.com/en-us/news/24301516/gather-around-the-campfire-in-world-of-warcraft-forever';
const updated = '2026-11-03';

export const guides: Guide[] = [
  ...firstDayGuides,
  {
    locale: 'zh', slug: 'launch', title: '无限服开服时间与准备清单', shortTitle: '开服清单',
    description: '魔兽世界无限服开服时间、游戏时间要求、天裔礼包区别、体验预设与规则集选择，附可保存的6项准备清单。',
    eyebrow: 'LAUNCH PREP · 开服准备', heading: '开服前，先把这6件事办完',
    lead: '北京时间2026年11月5日上午7:00全球同步开服。别把时间浪费在排队后才纠结职业、规则集和礼包。',
    answer: '有有效《魔兽世界》游戏时间就能玩基础内容，不需要单独购买“无限”。天裔种族及泽风岛起始剧情需要天裔英雄礼包或更高版本。和朋友玩，先约定同一个规则集。',
    updated, source: launchSource,
    blocks: [
      { id: 'checklist', type: 'checklist', title: '6项开服检查', intro: '勾选状态只保存在你自己的浏览器里，不需要登录。', items: [
        '确认账号有有效游戏时间，并提前更新战网与游戏客户端',
        '和朋友约定同一个规则集；不同规则集不能组队',
        '决定使用“经典”还是“增强”体验预设，之后仍可调整具体设置',
        '用职业选择器确定一个主角色，再准备一个备选即可',
        '想好两个主专业，并了解钓鱼、急救、烹饪三个辅助专业都能学习',
        '第一段游戏只设一个小目标：熟悉操作、解锁天赋、找队友，不盲目冲级',
      ] },
      { id: 'time-access', type: 'table', title: '时间、版本与进入条件', headers: ['项目', '你该知道的'], rows: [
        ['全球开服', '太平洋时间11月4日15:00；北京时间11月5日07:00'],
        ['基础内容', '有效《魔兽世界》订阅或游戏时间即可进入'],
        ['天裔与泽风岛', '需要购买天裔英雄礼包或更高版本；不影响基础内容进入'],
        ['首批团队副本', '深穴、海加尔山与奥妮克希亚的巢穴于12月9日（太平洋时间）开放'],
        ['硬核规则集', '不会在首发时开放，官方计划在上线后推出'],
      ] },
      { id: 'preset', type: 'cards', title: '“经典”还是“增强”？', intro: '不确定就选“增强”。它只是起始设置，不会锁定你的角色或能力。', items: [
        { tag: '新手更省心', title: '增强 / Enhanced', text: '高清模型、任务目标提示、单一大背包、幻化和集中式界面默认开启。第一次玩或回归玩家优先选它。' },
        { tag: '原版观感', tagStyle: 'orange', title: '经典 / Classic', text: '标准模型、较少自动指引、传统界面，幻化默认关闭。适合明确想要经典观感的玩家。' },
      ], note: { title: '别把这当成难度选择', text: '两种预设改变的是默认显示和界面，不是角色强度。进入游戏后仍可在选项中逐项修改。' } },
      { id: 'first-session', type: 'steps', title: '第一段游戏怎么安排', items: [
        { title: '先选规则集', text: '想和朋友一起玩，就先确认大家都在同一规则集、同一阵营；不同规则集不能组队。' },
        { title: '再熟悉新系统', text: '10级解锁天赋；专业技能达到20后可以接触首批营地物件，不必一上来就记住全部系统。' },
        { title: '最后再看效率', text: '先确认操作和路线适合自己，再追求速度。旧经典服攻略不一定适用于改动后的任务和装备。' },
      ] },
    ],
    next: { slug: 'classes', title: '准备好了，就选一个真正适合自己的职业。', label: '开始选职业' },
  },
  {
    locale: 'zh', slug: 'rulesets', title: '无限服规则集怎么选', shortTitle: '规则集选择',
    description: '无限服普通、PvP、角色扮演、角色扮演PvP与硬核规则集区别，以及组队、阵营和传承进度限制。',
    eyebrow: 'RULESETS · 玩法选择', heading: '不是选服务器，是选你想怎么玩',
    lead: '无限服采用无传统服务器列表的设计。你选择的是规则集；每个规则集是独立的大生态，而不是全世界所有人挤在同一张地图。',
    answer: '只想安稳做任务选普通；喜欢野外遭遇战选PvP；重视角色扮演选对应RP规则。和朋友玩必须选同一规则集，而且部落与联盟仍然不能互相组队。',
    updated, source: systemsSource,
    blocks: [
      { id: 'compare', type: 'table', title: '五种规则一眼看懂', headers: ['规则集', '适合谁', '需要注意'], rows: [
        ['普通 / Normal', '新手、休闲玩家、以任务和副本为主的玩家', '玩家对战通常需要双方同意'],
        ['PvP', '喜欢野外冲突、能接受做任务时被袭击的玩家', '争夺地区风险更高；营地也不是绝对安全区'],
        ['角色扮演 / RP', '喜欢角色设定、命名和沉浸社区的玩家', '需遵守命名与行为规则'],
        ['角色扮演PvP / RP PvP', '既要角色扮演也要野外对战的玩家', '同时遵守RP规则并承担PvP风险'],
        ['硬核 / Hardcore', '追求死亡有持久后果的高挑战玩家', '上线后开放；拥有独立生态和特殊传承规则'],
      ] },
      { id: 'decision', type: 'steps', title: '和朋友一起做决定', items: [
        { title: '先说能不能接受野外被杀', text: '不能就普通，能再考虑PvP。不要因为别人一句“PvP才热闹”就硬着头皮选。' },
        { title: '再确认阵营', text: '部落和联盟仍然分离。规则集相同但阵营不同，也不能一起组队冒险。' },
        { title: '最后确认角色名规则', text: '角色采用双名称结构，在整个大区内组合唯一；RP规则集还有额外命名要求。' },
      ] },
      { id: 'limits', type: 'text', title: '这些限制别忽略', bullets: [
        '不同规则集之间不能组队、一起打地下城或团队副本。',
        '硬核角色死亡后可以转到其他规则集，但硬核进度与其他规则集不是双向同步。',
        '非硬核角色的收藏和传承点数在账号层面共享；硬核有独立限制。',
        '语言偏好会帮助你遇到使用相同语言的玩家，但不是传统意义上的选服务器。',
      ], note: { title: '我们的新手建议', text: '这是编辑建议：第一次接触经典60级玩法，又没有固定PvP队伍时，先从普通规则集开始，更容易把注意力放在职业和世界上。' } },
    ],
    next: { slug: 'classes', title: '玩法定了，接下来选职业。', label: '30秒选职业' },
  },
  {
    locale: 'zh', slug: 'leveling', title: '无限服1—60级练级总览', shortTitle: '练级路线',
    description: '魔兽世界无限服1—60级练级阶段、关键解锁与通用检查清单。不照搬旧经典服路线，正式服路线持续核验。',
    eyebrow: 'LEVELING · 1—60', heading: '先掌握节奏，再谈最快路线',
    lead: '无限服保留经典战斗节奏，同时加入1000多个新任务、新区域、装备与职业改动。旧路线可以参考，但不能假装所有答案都没变。',
    answer: '新手第一遍不要只追“最短时间”。优先学职业技能、开飞行点、保持合适装备、利用营地与休息经验，再按自己的职业和阵营选择任务路线。具体逐站路线会在正式服核验后更新。',
    updated, source: launchSource,
    blocks: [
      { id: 'milestones', type: 'table', title: '升级路上的关键节点', headers: ['阶段', '应该做什么', '为什么重要'], rows: [
        ['1—9级', '熟悉移动、战斗、任务和背包；选择主专业', '先减少操作负担，比抄一套后期手法更重要'],
        ['10级', '开始获得天赋点', '天赋10级解锁，点法要服务于当前练级方式'],
        ['专业技能20', '获取首批营地物件', '营地增益需要靠近篝火并坐下或制作至少1分钟'],
        ['约25级', '多数玩家通过角色升级获得首个传承点', '传承界面默认快捷键Y，也可以点菜单盾牌图标'],
        ['45级', '完成本职业45级挑战可再获得传承点', '传承点账号共享，但每个角色独立分配'],
        ['60级', '核对地下城、装备与团队副本准备', '首批团队副本不是开服当天就开放，不用为首日满级牺牲睡眠'],
      ] },
      { id: 'stage-plan', type: 'cards', title: '三段式练级思路', items: [
        { tag: '1—20级', title: '先把角色玩顺', text: '选1套简单手法，学关键技能，接触专业与营地。不要频繁换职业，前20级体验并不代表所有后期玩法。' },
        { tag: '21—45级', title: '围绕任务与地下城组队', text: '控制、仇恨和集火仍然重要。进本前接任务，队伍里明确坦克、治疗和主要控制目标。' },
        { tag: '46—60级', tagStyle: 'orange', title: '开始为满级做准备', text: '整理装备、专业与传承优先级，了解地下城任务。不要把旧经典服的每件“毕业装”都当成唯一答案。' },
      ] },
      { id: 'repeat-check', type: 'checklist', title: '每换一张地图，检查这6项', items: [
        '职业技能是否有该学的新等级或新技能',
        '飞行点是否已经开启，下一段路线是否顺路',
        '武器技能是否落后太多，避免命中和伤害体验突然变差',
        '背包是否够用，食物、水和施法材料是否需要补充',
        '附近是否有安全营地，可以花1分钟获得增益',
        '当前任务与装备是否仍适合自己的等级和职业',
      ] },
      { id: 'route-status', type: 'text', title: '为什么不直接复制旧60级路线？', paragraphs: [
        '无限服修改了任务奖励、地下城掉落、职业和种族，并增加新区域与1000多个新任务。直接照搬旧路线，可能让你错过更适合当前职业的奖励。',
        '我们会把“官方确认的解锁”和“正式服实测路线”分开标注。没有经过核验的具体经验值、每小时升级速度和最佳天赋顺序，不会写成确定事实。',
      ], note: { title: '当前状态', text: '本页是通用练级框架，不冒充已经实测完成的逐站路线。职业逐页路线会在正式服核验后陆续发布。' } },
    ],
    next: { slug: 'legacy', title: '练级同时，别漏了账号通用的传承点数。', label: '看懂传承' },
  },
  {
    locale: 'zh', slug: 'legacy', title: '无限服16点传承优先级', shortTitle: '传承点数',
    description: '无限服传承系统怎么解锁、16点上限、单角色能否拿够点数，以及练级、专业与独狼玩法的专长优先级。',
    eyebrow: 'LEGACY · 账号成长', heading: '16点传承，不用先练一堆小号',
    lead: '传承点数在账号内共享，每个角色分别分配。挑战鼓励你体验不同内容，但不要求新手必须练小号才能跟上。',
    answer: '开服时每个角色最多分配16点；单角色不练小号也能获得最多29点，足够达到分配上限。先按角色目标选专长：练级看休息经验与生存，专业看技能提升与采集，独狼看回复与跑尸成本。',
    updated, source: legacySource,
    blocks: [
      { id: 'how', type: 'text', title: '先把规则说清楚', bullets: [
        '共有65项传承挑战，每项给1点；非硬核角色的点数在战网账号内共享。',
        '多数玩家首个角色到25级时解锁系统，也可通过非采集主专业150或探索完整世界地图解锁。',
        '每个角色独立花费点数，开服分配上限为16点；一个角色不练小号最多可获得29点。',
        '超过分配上限的点数仍会推进账号奖励路线，解锁宠物、玩具和坐骑等外观奖励。',
      ], note: { title: '优先级不等于最终点法', text: '下面是按官方效果整理的选择顺序，不假装已知所有专长层级与每级花费。进游戏后先打开传承树核对，再分配点数。' } },
      { id: 'priorities', type: 'cards', title: '按你的目标先看这些专长', items: [
        { tag: '练级', title: '精神抖擞 → 冒险刺激 → 才华横溢', text: '提高精力充沛经验获取和上限；击杀后回复生命与法力；更早获得天赋点。经常赶路再看“飞行常客”。' },
        { tag: '专业', title: '加班加点 → 大丰收 → 以物易物', text: '提高技能提升机会、增加稀缺采集资源、降低商人价格。烹饪和钓鱼玩家再看对应专长。' },
        { tag: '独狼', title: '冒险刺激 → 战地急救 → 强固', text: '提高连续打怪回复，缩短绷带减益，并降低死亡耐久损失。减少回复和跑尸浪费的时间。' },
        { tag: '团队辅助', title: '恒久 → 材料节约', text: '延长团队与露营增益；让职业技能不再购买材料，并让1级露营设施免材料。' },
      ] },
      { id: 'perks', type: 'table', title: '三棵树的官方效果速查', headers: ['分支', '专长', '官方效果（简写）'], rows: [
        ['专业', '加班加点 / Working Overtime', '提高所有商业技能提升机会，包括开锁'],
        ['专业', '大丰收 / Bountiful Harvest', '采矿、采药或剥皮时发现更多稀缺资源'],
        ['专业', '以物易物 / Bartering', '降低商人出售物品的金币价格'],
        ['专业', '绩效奖金 / Performance', '有时从贸易阵营获得更多商人青睐'],
        ['专业', '厨师长 / Master Chef', '烹饪配方有机会产出额外成品'],
        ['专业', '诱饵大师 / Luremaster', '钓鱼有机会获得额外鱼类'],
        ['专业', '潜心研究 / Dedicated Study', '每日冷却，帮助商业技能提升；全满后给元素精华'],
        ['冒险', '精神抖擞 / Well Rested', '提高精力充沛经验上限和积累速度'],
        ['冒险', '冒险刺激 / Thrill of Adventure', '击杀有经验或荣誉的敌人后回复少量生命与法力'],
        ['冒险', '戒备森严 / High Alert', '提高战场外的潜行侦测'],
        ['冒险', '野外指南 / Field Guide', '缩短放置露营设施的1小时冷却'],
        ['冒险', '战地急救 / Field Medicine', '缩短“新近包扎”减益；副本、团本和战场除外'],
        ['冒险', '才华横溢 / Talented', '最多提前5级解锁天赋点'],
        ['冒险', '飞行常客 / Frequent Flier', '降低飞行费用并提高飞行速度'],
        ['充裕', '食神 / Gourmand', '延长进食增益持续时间'],
        ['充裕', '生者与死者 / The Quick and the Dead', '提高跑尸速度，复活后的队伍和团队增益免费'],
        ['充裕', '强固 / Reinforce', '降低死亡造成的耐久损失'],
        ['充裕', '无上的荣耀 / For Great Honor', '提高PvP荣誉获取'],
        ['充裕', '恒久 / Permanence', '延长小队、团队和露营增益持续时间'],
        ['充裕', '外交官 / Diplomat', '提高声望获取'],
        ['充裕', '材料节约 / Reagent Economy', '职业技能不再需要购买材料，1级露营设施免材料'],
      ] },
      { id: 'spend-plan', type: 'steps', title: '实际分配前做三步', items: [
        { title: '先定这个角色的任务', text: '主练级、主专业还是主PvP？不要试图用有限点数同时照顾所有玩法。' },
        { title: '再核对前置与费用', text: '游戏内树的层级和实际点数花费决定最终顺序；优先级清单不能替代这一步。' },
        { title: '点错可以调整', text: '需要调整天赋（包括传承天赋）时，可前往主城找职业训练师；以后内容更新还会增加挑战与专长。' },
      ] },
    ],
    next: { slug: 'camping', title: '传承看完，给队伍配一套营地增益。', label: '搭配营地' },
  },
  {
    locale: 'zh', slug: 'camping', title: '无限服营地专业搭配与增益表', shortTitle: '营地搭配',
    description: '无限服营地怎么玩、各专业营地物件效果、职业增益冲突，附三人营地搭配器和可复制清单。',
    eyebrow: 'CAMPING · 专业协作', heading: '别只把篝火当做饭工具',
    lead: '基础篝火最多容纳3件专业物件，每名玩家贡献1件。坐下或制作至少1分钟，就能获得其他营地物件带来的好处。',
    answer: '三人队优先补队伍缺的增益，不要重复堆同一种效果。钓鱼、急救和烹饪是辅助专业，人人都能学；锻造、炼金等主专业最多学两个。选好后用下方搭配器生成清单。',
    updated, source: campingSource,
    blocks: [
      { id: 'how-camp', type: 'steps', title: '三步拿到营地增益', items: [
        { title: '放一堆基础篝火', text: '篝火来自烹饪。选择安全位置；PvP规则集下，敌人可能发现你的营地。' },
        { title: '最多放3件物件', text: '每名玩家只能贡献1件。专业技能20后可获得首批物件，高阶蓝图来自地下城与团队副本。' },
        { title: '坐下或制作1分钟', text: '不是路过就自动获得。靠近篝火坐下或制作至少1分钟，获得其他物件提供的增益。' },
      ] },
      { id: 'profession-table', type: 'table', title: '10个专业物件与冲突速查', intro: '数值随角色等级变化的部分以官方公开范围为准。同一类职业增益与营地效果不能叠加。', headers: ['专业 / 物件', '效果', '互斥或限制'], rows: campFeatures.zh.map((feature) => [`${feature.profession} · ${feature.item}`, feature.effect, feature.conflict]) },
      { id: 'camp-advice', type: 'text', title: '怎么选不浪费', bullets: [
        '队伍已经有对应职业增益时，营地物件不会额外叠一份同样的效果。',
        '独狼练级可优先看制皮帐篷、急救包和适合自己属性的物件。',
        '法力职业关注炼金法力之井，物理力量职业关注锻造磨刀轮；先满足主属性再谈全面。',
        '工程学材料机器人提供购买材料的便利，不提供数值增益，适合作为补给位。',
        '烹饪升级篝火可扩展到5件或10件物件；本页搭配器先按开局最常见的基础3槽计算。',
      ], note: { title: '所有营地设施共享1小时冷却', text: '放置前和队友沟通，别三个人同时抢着放，也别在危险区域为了拿增益原地坐满1分钟。' } },
    ],
    next: { slug: 'launch', title: '营地清单有了，回去完成开服准备。', label: '查看清单' },
  },

  {
    locale: 'en', slug: 'launch', title: 'WoW Forever launch time and preparation', shortTitle: 'Launch prep',
    description: 'WoW Forever launch time, game-time access, optional Skyborne packs, experience presets and rulesets, with a six-step preparation checklist.',
    eyebrow: 'LAUNCH PREP', heading: 'Do these 6 things before launch',
    lead: 'Global launch is November 5 at 07:00 Beijing time. Make the class, ruleset and pack decisions before the login queue, not after it.',
    answer: 'Active World of Warcraft game time includes the base game; there is no separate Forever purchase. The Skyborne race and Zephras Isle starting experience require the Skyborne Heroic Pack or higher. If playing with friends, agree on one ruleset first.',
    updated, source: launchSource,
    blocks: [
      { id: 'checklist', type: 'checklist', title: 'Your six-point launch check', intro: 'Checks are saved only in this browser. No account is required.', items: [
        'Confirm active game time and update Battle.net and the game client',
        'Agree on one ruleset with your friends; grouping across rulesets is not supported',
        'Choose Classic or Enhanced as a starting preset; individual settings can still change later',
        'Pick one main class and, at most, one backup with the class finder',
        'Consider two primary professions; remember that all three secondary professions are available',
        'Set one small first-session goal: learn the controls, unlock talents and find a group',
      ] },
      { id: 'time-access', type: 'table', title: 'Launch time and access', headers: ['Item', 'What you need to know'], rows: [
        ['Global launch', 'November 4 at 3:00 p.m. PST; November 5 at 07:00 in Beijing'],
        ['Base access', 'Included with an active World of Warcraft subscription or game time'],
        ['Skyborne and Zephras Isle', 'Require the optional Skyborne Heroic Pack or higher; not required for base access'],
        ['First raids', 'Barrow Deeps, Hyjal Summit and Onyxia’s Lair open December 9, Pacific time'],
        ['Hardcore', 'Not available at launch; planned for a later release'],
      ] },
      { id: 'preset', type: 'cards', title: 'Classic or Enhanced?', intro: 'If unsure, start with Enhanced. It changes starting settings, not your character’s power or progression.', items: [
        { tag: 'Easier first login', title: 'Enhanced', text: 'HD models, quest guidance, one-bag, transmog and a centralized interface are enabled by default. A sensible starting point for new and returning players.' },
        { tag: 'Original presentation', tagStyle: 'orange', title: 'Classic', text: 'Standard models, less automatic guidance, a traditional interface and transmog off by default. Choose it if you know you prefer that presentation.' },
      ], note: { title: 'This is not a difficulty setting', text: 'Both presets are collections of defaults. You can change the individual options later in the game menu.' } },
      { id: 'first-session', type: 'steps', title: 'A sensible first session', items: [
        { title: 'Choose the ruleset first', text: 'For group play, confirm both ruleset and faction. Different rulesets cannot group, and Horde and Alliance remain separate.' },
        { title: 'Learn systems as they appear', text: 'Talents unlock at level 10. Profession camp features begin at skill 20. You do not need to master every system before level two.' },
        { title: 'Optimize after it feels right', text: 'Test the controls and your class before chasing speed. Old Classic routes may not match changed quests and rewards.' },
      ] },
    ],
    next: { slug: 'classes', title: 'Ready? Pick a class that fits how you actually play.', label: 'Find a class' },
  },
  {
    locale: 'en', slug: 'rulesets', title: 'WoW Forever rulesets explained', shortTitle: 'Rulesets',
    description: 'Normal, PvP, roleplaying, RP PvP and Hardcore rulesets in WoW Forever, including grouping, faction and Legacy restrictions.',
    eyebrow: 'RULESETS', heading: 'Choose how you want to play, not a realm name',
    lead: 'Forever replaces the traditional realm list with rulesets. Each is a broad ecosystem of its own—not one giant server containing everyone.',
    answer: 'Choose Normal for a quest-focused baseline, PvP for open-world danger, or an RP ruleset for roleplaying. Friends need the same ruleset and faction: grouping across rulesets or between Horde and Alliance is not supported.',
    updated, source: systemsSource,
    blocks: [
      { id: 'compare', type: 'table', title: 'Five options at a glance', headers: ['Ruleset', 'Best for', 'Keep in mind'], rows: [
        ['Normal', 'New players and anyone focused on quests and dungeons', 'PvP generally requires mutual consent'],
        ['PvP', 'Players who enjoy world conflict and can accept being attacked', 'Contested areas—and even camps—carry more risk'],
        ['Roleplay', 'Players who want character immersion and an RP community', 'Naming and conduct rules apply'],
        ['Roleplay PvP', 'Players who want both RP and world PvP', 'RP rules and PvP risk both apply'],
        ['Hardcore', 'Players who want lasting consequences for death', 'Available after launch, with a separate ecosystem and Legacy rules'],
      ] },
      { id: 'decision', type: 'steps', title: 'Decide with your friends', items: [
        { title: 'Start with world PvP tolerance', text: 'If being attacked while questing sounds miserable, choose Normal. Do not pick PvP just because someone calls it more exciting.' },
        { title: 'Confirm the same faction', text: 'Horde and Alliance remain separate. Matching rulesets are not enough if your characters are on opposing factions.' },
        { title: 'Check naming expectations', text: 'Characters use a two-part name unique within a region. RP rulesets add naming and behavior requirements.' },
      ] },
      { id: 'limits', type: 'text', title: 'Restrictions worth knowing', bullets: [
        'Grouping, dungeons and raids across different rulesets are not supported.',
        'A dead Hardcore character can transfer to another ruleset; Hardcore progress does not synchronize both ways.',
        'Collections and Legacy points are account-wide for non-Hardcore characters, with separate Hardcore restrictions.',
        'Language preference helps you meet players who share it; it is not a traditional realm choice.',
      ], note: { title: 'Our beginner recommendation', text: 'Editorial advice: if this is your first level-60 Classic-style journey and you do not have a committed PvP group, Normal gives you more room to learn your class and the world.' } },
    ],
    next: { slug: 'classes', title: 'Ruleset settled. Now choose a class.', label: 'Find your class' },
  },
  {
    locale: 'en', slug: 'leveling', title: 'WoW Forever level 1—60 overview', shortTitle: 'Leveling',
    description: 'A practical WoW Forever level 1—60 framework, major unlocks and repeatable checklist. Old Classic routes are not presented as verified Forever routes.',
    eyebrow: 'LEVELING · 1—60', heading: 'Learn the rhythm before chasing a speed record',
    lead: 'Forever keeps Classic combat pacing but adds more than 1,000 quests, new zones, items and class changes. Old routes can inform a plan; they are not automatically the right answer.',
    answer: 'On a first playthrough, prioritize class skills, flight paths, usable gear, camping and rested experience over a theoretical fastest time. Stop-by-stop class routes will be labeled only after live-server verification.',
    updated, source: launchSource,
    blocks: [
      { id: 'milestones', type: 'table', title: 'Milestones along the way', headers: ['Stage', 'What to do', 'Why it matters'], rows: [
        ['Levels 1—9', 'Learn movement, combat, quests and bags; consider primary professions', 'Reducing friction matters more than copying a max-level rotation'],
        ['Level 10', 'Start spending talent points', 'Talents unlock at 10; choose points for the way you are leveling'],
        ['Profession skill 20', 'Acquire your first camp features', 'Camp benefits require a campfire and at least one minute nearby'],
        ['Around level 25', 'Most players earn their first Legacy point through leveling', 'Open Legacy with Y or the shield icon in the menu'],
        ['Level 45', 'A class challenge at 45 grants another Legacy point', 'Points are account-wide but spent independently per character'],
        ['Level 60', 'Review dungeons, gear and raid preparation', 'The first raids do not open on launch day; sleep is not a progression penalty'],
      ] },
      { id: 'stage-plan', type: 'cards', title: 'The journey in three stages', items: [
        { tag: 'Levels 1—20', title: 'Make the character feel good', text: 'Use a simple rotation, learn key skills, and try professions and camping. Early impressions do not describe every max-level role.' },
        { tag: 'Levels 21—45', title: 'Combine quests and dungeon groups', text: 'Crowd control, threat and focus targets matter. Pick up dungeon quests and agree on roles and control targets.' },
        { tag: 'Levels 46—60', tagStyle: 'orange', title: 'Prepare for the level cap', text: 'Review gear, professions and Legacy priorities. Do not assume every old Classic best-in-slot list survived unchanged.' },
      ] },
      { id: 'repeat-check', type: 'checklist', title: 'Check these six things in each new zone', items: [
        'New class skills or skill ranks worth training',
        'The flight path and whether the next leg of your route is efficient',
        'Weapon skill, especially if it has fallen far behind',
        'Bag space, food, water and any required reagents',
        'A safe campsite where one minute could provide useful benefits',
        'Whether current quests and rewards still fit your level and class',
      ] },
      { id: 'route-status', type: 'text', title: 'Why not copy an old level-60 route?', paragraphs: [
        'Forever changes quest rewards, dungeon drops, classes and races, and adds new zones and more than 1,000 quests. An old route may skip a reward that now fits your class better.',
        'We separate official unlocks from live-tested routes. Unverified experience rates, leveling speeds and exact talent sequences will not be presented as settled facts.',
      ], note: { title: 'Current status', text: 'This is a general leveling framework, not a pretend live-tested stop-by-stop route. Class routes will follow after live verification.' } },
    ],
    next: { slug: 'legacy', title: 'While leveling, make your account-wide Legacy points count.', label: 'Understand Legacy' },
  },
  {
    locale: 'en', slug: 'legacy', title: 'WoW Forever: your first 16 Legacy points', shortTitle: 'Legacy priorities',
    description: 'How WoW Forever Legacy unlocks, the 16-point spending cap, single-character progress and perk priorities for leveling, professions and solo play.',
    eyebrow: 'LEGACY · ACCOUNT PROGRESSION', heading: 'You do not need an alt army to spend 16 points',
    lead: 'Legacy points are shared across the account but spent by each character independently. Challenges reward varied play without forcing new players to level alts to catch up.',
    answer: 'At launch, each character can spend up to 16 points. A single character can earn up to 29 without leveling an alt, more than enough to reach that cap. Choose perks for the character’s job: leveling, professions or solo sustain—not every activity at once.',
    updated, source: legacySource,
    blocks: [
      { id: 'how', type: 'text', title: 'The rules in plain language', bullets: [
        'There are 65 Legacy Challenges worth one point each. Non-Hardcore points are shared across the Battle.net account.',
        'Most players unlock Legacy when their first character reaches level 25; profession skill 150 or full world exploration can also unlock it.',
        'Each character spends points independently, with a launch cap of 16. One character can earn up to 29 without an alt.',
        'Points beyond the spending cap still advance account-wide cosmetic rewards, including a pet, toy and mount.',
      ], note: { title: 'Priorities are not a fake final build', text: 'These priorities follow official perk effects. We do not pretend to know every tree prerequisite and rank cost. Open the in-game tree and verify those before spending.' } },
      { id: 'priorities', type: 'cards', title: 'Perks to inspect first, by goal', items: [
        { tag: 'Leveling', title: 'Well Rested → Thrill of Adventure → Talented', text: 'More rested experience, post-kill health and mana, and earlier talent points. Consider Frequent Flier for travel-heavy play.' },
        { tag: 'Professions', title: 'Working Overtime → Bountiful Harvest → Bartering', text: 'Better skill-up odds, additional scarce gathered resources and cheaper vendor items. Cooks and anglers have their own perks.' },
        { tag: 'Solo play', title: 'Thrill of Adventure → Field Medicine → Reinforce', text: 'Sustain between kills, shorter Recently Bandaged outside instanced content, and less durability loss on death.' },
        { tag: 'Group utility', title: 'Permanence → Reagent Economy', text: 'Longer group and camp buffs, then no purchased reagents for class abilities and tier-one camp features.' },
      ] },
      { id: 'perks', type: 'table', title: 'Official perk effects at a glance', headers: ['Tree', 'Perk', 'Official effect (summarized)'], rows: [
        ['Professions', 'Working Overtime', 'Improves skill-up chances across tradeskills, including Lockpicking'],
        ['Professions', 'Bountiful Harvest', 'Finds additional scarce resources when mining, herbing or skinning'],
        ['Professions', 'Bartering', 'Reduces vendor gold prices'],
        ['Professions', 'Performance', 'Sometimes increases Merchant’s Favor from trade factions'],
        ['Professions', 'Master Chef', 'Cooking recipes can produce extra results'],
        ['Professions', 'Luremaster', 'A chance to catch extra fish'],
        ['Professions', 'Dedicated Study', 'A daily cooldown for skill progress, or Elemental Essences when maxed'],
        ['Adventure', 'Well Rested', 'Raises the rested cap and accumulation speed'],
        ['Adventure', 'Thrill of Adventure', 'Restores a little health and mana after a non-trivial kill'],
        ['Adventure', 'High Alert', 'Improves stealth detection outside battlegrounds'],
        ['Adventure', 'Field Guide', 'Reduces the one-hour camp-feature cooldown'],
        ['Adventure', 'Field Medicine', 'Shortens Recently Bandaged outside dungeons, raids and battlegrounds'],
        ['Adventure', 'Talented', 'Unlocks talent points up to five levels earlier'],
        ['Adventure', 'Frequent Flier', 'Reduces flight costs and speeds up flights'],
        ['Resourcefulness', 'Gourmand', 'Increases food buff duration'],
        ['Resourcefulness', 'The Quick and the Dead', 'Faster corpse runs; free party and raid buffs after resurrection'],
        ['Resourcefulness', 'Reinforce', 'Reduces durability damage from death'],
        ['Resourcefulness', 'For Great Honor', 'Increases PvP Honor gains'],
        ['Resourcefulness', 'Permanence', 'Extends party, raid and camping buff duration'],
        ['Resourcefulness', 'Diplomat', 'Increases reputation gains'],
        ['Resourcefulness', 'Reagent Economy', 'Removes purchased reagent costs from class abilities and tier-one camp features'],
      ] },
      { id: 'spend-plan', type: 'steps', title: 'Three checks before spending', items: [
        { title: 'Give this character a job', text: 'Leveling, professions or PvP? A limited budget cannot optimize every activity at once.' },
        { title: 'Check prerequisites and costs', text: 'Tree placement and actual point costs determine the final order. A priority list does not replace that check.' },
        { title: 'Expect the system to grow', text: 'Spending is character-specific, and future updates will add challenges, perks and higher spending caps.' },
      ] },
    ],
    next: { slug: 'camping', title: 'Legacy planned? Build a useful camp for your group.', label: 'Build a camp' },
  },
  {
    locale: 'en', slug: 'camping', title: 'WoW Forever camping combos and buffs', shortTitle: 'Camping',
    description: 'How WoW Forever camping works, every profession camp feature, class buff conflicts and a three-slot camp builder with a copyable checklist.',
    eyebrow: 'CAMPING · PROFESSION CO-OP', heading: 'The campfire is more than a cooking station',
    lead: 'A Basic Campfire supports up to three profession-made features, one per nearby player. Sit or craft for at least one minute to receive benefits from the other features.',
    answer: 'Fill gaps in your group instead of duplicating the same buff. Cooking, Fishing and First Aid are secondary professions available to everyone; only two primary professions can be learned. Use the builder below to make a copyable checklist.',
    updated, source: campingSource,
    blocks: [
      { id: 'how-camp', type: 'steps', title: 'Three steps to camp benefits', items: [
        { title: 'Place a Basic Campfire', text: 'The campfire comes from Cooking. Pick a safe spot; on a PvP ruleset, enemies may find your camp.' },
        { title: 'Add up to three features', text: 'Each player contributes one. First features begin at profession skill 20; advanced blueprints drop in instanced content.' },
        { title: 'Sit or craft for one minute', text: 'Benefits are not granted by simply running past. Stay near the fire and sit or craft for at least one minute.' },
      ] },
      { id: 'profession-table', type: 'table', title: 'Ten features and their conflicts', intro: 'Level-dependent values use the official published ranges. A camp effect does not stack with its corresponding class buff.', headers: ['Profession / feature', 'Benefit', 'Conflict or limit'], rows: campFeatures.en.map((feature) => [`${feature.profession} · ${feature.item}`, feature.effect, feature.conflict]) },
      { id: 'camp-advice', type: 'text', title: 'How to avoid wasting a slot', bullets: [
        'If the group already has the corresponding class buff, the camp feature does not add another copy of it.',
        'For solo leveling, inspect the Leatherworking tent, First Aid kit and a feature matching your important stats.',
        'Mana users should consider Alchemy; Strength-based physical characters should consider Blacksmithing.',
        'Engineering’s Reagent Bot is a utility slot, not a stat buff. Use it when supplies are the actual problem.',
        'Cooks can eventually unlock five- and ten-feature campfires. This builder uses the Basic Campfire’s three starting slots.',
      ], note: { title: 'All camp features share a one-hour cooldown', text: 'Coordinate before placing anything. Do not sit in a dangerous area for a full minute just to collect a buff.' } },
    ],
    next: { slug: 'launch', title: 'Camp planned. Finish the launch checklist.', label: 'Open checklist' },
  },
];
