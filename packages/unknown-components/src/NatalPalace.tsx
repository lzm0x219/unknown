import { Group, Rect } from "react-konva";
import { type NatalPalace as INatalPalace } from "@unknown/core";
import { NatalPalaceVerticalBox } from "./NatalPalaceVerticalBox";
import { NatalPalaceHorizontalBox } from "./NatalPalaceHorizontalBox";
import { NatalPalaceStars } from "./NatalPalaceStars";
import { NatalPalaceOrigin } from "./NatalPalaceOrigin";

export interface NatalPalaceProps {
  width: number;
  height: number;
  x: number;
  y: number;
  palace: INatalPalace;
  isNatalTen: boolean;
  isSelected?: boolean;
  selectedSelfTransform: string[];
  onClick?: () => void;
}

export function NatalPalace({
  width,
  height,
  x,
  y,
  palace,
  isNatalTen,
  selectedSelfTransform = [],
  isSelected = false,
  onClick,
}: NatalPalaceProps) {
  // 竖
  const [verticalWidth, verticalHeight] = [width / 5, height / 3];
  // 横
  const [horizontalWidth, horizontalHeight] = [
    (width / 5) * 3,
    verticalHeight / 2,
  ];

  return (
    <Group onClick={onClick}>
      {/* 宫位轮廓 */}
      <Rect
        width={width}
        height={height}
        x={x}
        y={y}
        stroke="black"
        strokeWidth={2}
        fill={isSelected ? "rgba(0,0,0,0.1)" : "white"}
      />
      {palace.isOriginPalace && (
        <NatalPalaceOrigin
          width={18}
          height={30}
          x={x + width - 18 - 5}
          y={y + height - verticalHeight - 30 - 10}
        />
      )}
      {/* 干支轮廓 */}
      <NatalPalaceVerticalBox
        name={palace.stemBranchLabel}
        width={verticalWidth}
        height={verticalHeight}
        x={x}
        y={y + verticalHeight * 2}
      />
      {/* 天盘宫职轮廓 */}
      <NatalPalaceVerticalBox
        name={palace.nameLabel}
        width={verticalWidth}
        height={verticalHeight}
        x={x + verticalWidth * 4}
        y={y + verticalHeight * 2}
      />
      {/* 地盘宫职 */}
      <NatalPalaceHorizontalBox
        name={palace.tenPositionName}
        width={horizontalWidth}
        height={horizontalHeight}
        x={x + verticalWidth}
        y={y + verticalHeight * 2}
        color={isNatalTen ? "red" : "black"}
      />
      {/* 大命年龄区间 */}
      <NatalPalaceHorizontalBox
        name={palace.ten}
        width={horizontalWidth}
        height={horizontalHeight}
        x={x + verticalWidth}
        y={y + verticalHeight * 2 + horizontalHeight}
        color={isNatalTen ? "red" : "black"}
      />
      <NatalPalaceStars
        x={x}
        y={y}
        stars={palace.stars}
        index={palace.index}
        selfTransform={selectedSelfTransform}
      />
    </Group>
  );
}
