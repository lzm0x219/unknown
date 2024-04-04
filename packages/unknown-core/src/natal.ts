import {
  Birthday,
  HeavenlyStems,
  HeavenlyStemsMap,
  EarthlyBranches,
  Palaces,
  FiveElements,
  FiveElementsBranches,
  UrsaMajor,
  SouthMajor,
  Stems,
  ShortPalaces,
  Energy,
} from "./constants";
import { fixIndex, selectElements } from "./shared";

export interface NatalCreateOptions {
  name?: string;
  birthday: string;
  birthdayType: Birthday;
  gender: string;
}

export interface Natal {
  // 个人信息
  profile: NatalProfile;
  // 生年四化
  selfTransform: string[];
  palaces: NatalPalace[];
  tens: NatalTen[];
  lifePalaceIndex: number;
  getTenPositionNameIndex(n: number): number;
  setCurrentTenIndex(n: number): void;
}

export interface NatalTen {
  // 大限年限区间
  ten: string;
  // 大限名称
  tenName: string;
}

export interface NatalProfile {
  name: string;
  gender: string;
  fiveElementName: string;
}

export interface NatalPalaceStar {
  star: string;
  selfTransform: string;
}

export interface NatalPalace {
  name: string;
  nameLabel: string;
  branch: string;
  stem: string;
  stemBranchLabel: string;
  isOriginPalace: boolean;
  stars: NatalPalaceStar[];
  selfTransform: string[];
  ten: string;
  tenPositionName: string;
}

export function createNatal({
  name = "匿名",
  birthday,
  birthdayType,
  gender,
}: NatalCreateOptions): Natal {
  const [year, month, day, time] = [1998, 12, 18, 6];

  const tenRecord = {
    currentTenIndex: 0,
  };

  // 天干的数
  const stemIndex = year % 10 === 0 ? 10 : year % 10;

  // 生年四化
  const selfTransform = HeavenlyStemsMap[stemIndex].stars;

  // 性别
  const yinYangGender = getYinYangGender(stemIndex, gender);

  // 生年天干和寅宫天干
  const { stem, tiger } = HeavenlyStemsMap[stemIndex];

  // 寅宫天干的索引
  const tigerHeavenlyStemIndex = fixIndex(HeavenlyStems.indexOf(tiger), 10);

  // 命宫的地支索引，順數至生月，再逆數至生時
  const lifePalaceIndex = fixIndex(month - time);

  // 布十二宫干
  const palaces = EarthlyBranches.map((branch, index) => {
    const currentStem =
      HeavenlyStems[fixIndex(tigerHeavenlyStemIndex + index, 10)];
    const name = Palaces[fixIndex(lifePalaceIndex - index)];

    return {
      name,
      nameLabel: name.split("").join("\n"),
      branch,
      stem: currentStem,
      stemBranchLabel: `${currentStem}\n${branch}`,
      isOriginPalace: stem === currentStem,
      stars: [] as NatalPalaceStar[],
      selfTransform: HeavenlyStemsMap[Stems[currentStem]].stars,
      ten: "",
      tenPositionName: "",
    };
  });

  const natalPalace = palaces.find((_, index) => index === lifePalaceIndex)!;

  // 纳音掌的命宫天干索引
  const natalPalaceStemIndex = FiveElements.findIndex((item) =>
    item.stem.includes(natalPalace.stem),
  );

  const fiveElements = selectElements(FiveElements, natalPalaceStemIndex);

  const natalPalaceBranchIndex = FiveElementsBranches.findIndex((item) =>
    item.includes(natalPalace.branch),
  );

  const { name: fiveElementName, number: fiveElementNumber } =
    fiveElements[natalPalaceBranchIndex];

  const zwIndex = fixIndex(getZiWeiIndex(day, fiveElementNumber));
  // 紫微天府寅申同宫，否则天府星位置与紫微星相对
  const tfIndex =
    zwIndex === 0 || zwIndex === 6 ? zwIndex : fixIndex(12 - zwIndex);

  // 安紫微星系
  UrsaMajor.forEach((star, i) => {
    if (star) {
      palaces[fixIndex(zwIndex - i)].stars.push({
        star,
        selfTransform: Energy[selfTransform.indexOf(star)],
      });
    }
  });
  // 安天府星系
  SouthMajor.forEach((star, i) => {
    if (star) {
      palaces[fixIndex(tfIndex + i)].stars.push({
        star,
        selfTransform: Energy[selfTransform.indexOf(star)],
      });
    }
  });

  // 安左辅右弼
  const [chenIndex, wuIndex] = [
    EarthlyBranches.indexOf("辰"),
    EarthlyBranches.indexOf("戌"),
  ];
  palaces[fixIndex(chenIndex + (month - 1))].stars.push({
    star: "左辅",
    selfTransform: Energy[selfTransform.indexOf("左辅")],
  });
  palaces[fixIndex(wuIndex - (month - 1))].stars.push({
    star: "右弼",
    selfTransform: Energy[selfTransform.indexOf("右弼")],
  });

  // 安文昌文曲
  palaces[fixIndex(chenIndex + (time - 1))].stars.push({
    star: "文曲",
    selfTransform: Energy[selfTransform.indexOf("文曲")],
  });
  palaces[fixIndex(wuIndex - (time - 1))].stars.push({
    star: "文昌",
    selfTransform: Energy[selfTransform.indexOf("文昌")],
  });

  // 安大限
  palaces.forEach((_, index) => {
    const tenIndex = fixIndex(
      isClockwise(stemIndex, gender)
        ? lifePalaceIndex + index
        : lifePalaceIndex - index,
    );
    palaces[tenIndex].ten =
      `${index * 10 + fiveElementNumber}~${(index + 1) * 10 + fiveElementNumber - 1}`;

    const tenPositionNameIndex = fixIndex(
      isClockwise(stemIndex, gender)
        ? lifePalaceIndex + index + tenRecord.currentTenIndex
        : lifePalaceIndex - index - tenRecord.currentTenIndex,
    );
    palaces[tenPositionNameIndex].tenPositionName = `大${ShortPalaces[index]}`;
  });

  const tens: NatalTen[] = [];

  return {
    profile: {
      name,
      gender: yinYangGender,
      fiveElementName,
    },
    selfTransform,
    palaces,
    tens,
    lifePalaceIndex,
    getTenPositionNameIndex(index: number) {
      return fixIndex(
        isClockwise(stemIndex, gender)
          ? lifePalaceIndex + index + tenRecord.currentTenIndex
          : lifePalaceIndex - index - tenRecord.currentTenIndex,
      );
    },
    setCurrentTenIndex(n) {
      tenRecord.currentTenIndex = n;
      palaces.forEach((_, index) => {
        const tenPositionNameIndex = fixIndex(
          isClockwise(stemIndex, gender)
            ? lifePalaceIndex + index + tenRecord.currentTenIndex
            : lifePalaceIndex - index - tenRecord.currentTenIndex,
        );
        palaces[tenPositionNameIndex].tenPositionName =
          `大${ShortPalaces[index]}`;
      });
    },
  };
}

function getZiWeiIndex(day: number, fiveElementNumber: number) {
  const remainder = day % fiveElementNumber;
  if (remainder === 0) {
    return day / fiveElementNumber - 1;
  }
  // 生日加至能除盡，若加雙數，則進所加之雙數。若加單數，則減所加之單數。
  const additionalNumber = fiveElementNumber - remainder;
  const isEvenNumber = additionalNumber / 2 === 0;
  return (
    (day + additionalNumber) / fiveElementNumber +
    (isEvenNumber ? additionalNumber : -additionalNumber) -
    1
  );
}

/**
 * 是否顺行大限
 * @param n 天干的数
 * @param gender 性别
 * @returns
 */
function isClockwise(n: number, gender: string) {
  return (
    (gender === "男" && (n + 1) % 2 !== 0) ||
    (gender === "女" && (n + 1) % 2 === 0)
  );
}

function getYinYangGender(n: number, gender: string) {
  if ((n + 1) % 2 === 0) {
    return "阴" + gender;
  }
  return "阳" + gender;
}
