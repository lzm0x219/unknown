export enum Birthday {
  Solar = 1,
  Lunisolar = 2,
  FourPillars = 3,
}

export enum Chronology {
  // 公元
  ChristianEra = 0,
  // 干支
  StemsBranches = 1,
}

// 子开天，丑开地，寅生人
export const EarthlyBranches = [
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥",
  "子",
  "丑",
];

export const HeavenlyStems = [
  "甲",
  "乙",
  "丙",
  "丁",
  "戊",
  "己",
  "庚",
  "辛",
  "壬",
  "癸",
];

export const Palaces = [
  "命宫",
  "兄弟",
  "夫妻",
  "子女",
  "财帛",
  "疾厄",
  "迁移",
  "交友",
  "官禄",
  "田宅",
  "福德",
  "父母",
];

export const ShortPalaces = [
  "命",
  "兄",
  "夫",
  "子",
  "财",
  "疾",
  "迁",
  "友",
  "官",
  "田",
  "福",
  "父",
];

type HeavenlyStemsRecord = {
  // 天干
  stem: string;
  // 五虎遁
  tiger: string;
  // 十天干四化曜
  stars: string[];
};

export const Stems: Record<string, number> = {
  甲: 4,
  乙: 5,
  丙: 6,
  丁: 7,
  戊: 8,
  己: 9,
  庚: 10,
  辛: 1,
  壬: 2,
  癸: 3,
};

export const HeavenlyStemsMap: Record<number, HeavenlyStemsRecord> = {
  4: {
    stem: "甲",
    tiger: "丙",
    stars: ["廉贞", "破军", "武曲", "太阳"],
  },
  5: {
    stem: "乙",
    tiger: "戊",
    stars: ["天机", "天梁", "紫微", "太阴"],
  },
  6: {
    stem: "丙",
    tiger: "庚",
    stars: ["天同", "天机", "文昌", "廉贞"],
  },
  7: {
    stem: "丁",
    tiger: "壬",
    stars: ["太阴", "天同", "天机", "巨门"],
  },
  8: {
    stem: "戊",
    tiger: "甲",
    stars: ["贪狼", "太阴", "右弼", "天机"],
  },
  9: {
    stem: "己",
    tiger: "丙",
    stars: ["武曲", "贪狼", "天梁", "文曲"],
  },
  10: {
    stem: "庚",
    tiger: "戊",
    stars: ["太阳", "武曲", "太阴", "天同"],
  },
  1: {
    stem: "辛",
    tiger: "庚",
    stars: ["巨门", "太阳", "文曲", "文昌"],
  },
  2: {
    stem: "壬",
    tiger: "壬",
    stars: ["天梁", "紫微", "左辅", "武曲"],
  },
  3: {
    stem: "癸",
    tiger: "甲",
    stars: ["破军", "巨门", "太阴", "贪狼"],
  },
};

export const FiveElements = [
  {
    name: "金四局",
    stem: "甲乙",
    number: 4,
  },
  {
    name: "水二局",
    stem: "丙丁",
    number: 2,
  },
  {
    name: "火六局",
    stem: "戊己",
    number: 6,
  },
  {
    name: "土五局",
    stem: "庚辛",
    number: 5,
  },
  {
    name: "木三局",
    stem: "壬癸",
    number: 3,
  },
];

export const FiveElementsBranches = ["子丑午未", "寅卯申酉", "辰巳戌亥"];

// 紫微星系
export const UrsaMajor = [
  "紫微",
  "天机",
  "",
  "太阳",
  "武曲",
  "天同",
  "",
  "",
  "廉贞",
];

// 天府星系
export const SouthMajor = [
  "天府",
  "太阴",
  "贪狼",
  "巨门",
  "天相",
  "天梁",
  "七杀",
  "",
  "",
  "",
  "破军",
];

export const Energy = ["A", "B", "C", "D"];
