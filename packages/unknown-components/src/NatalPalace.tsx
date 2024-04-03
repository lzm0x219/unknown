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
}

export function NatalPalace({ width, height, x, y, palace }: NatalPalaceProps) {
  // 竖
  const [verticalWidth, verticalHeight] = [width / 5, height / 3];
  // 横
  const [horizontalWidth, horizontalHeight] = [
    (width / 5) * 3,
    verticalHeight / 2,
  ];

  return (
    <Group>
      {/* 宫位轮廓 */}
      <Rect
        width={width}
        height={height}
        x={x}
        y={y}
        stroke="black"
        strokeWidth={2}
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
        name={palace.tenName}
        width={horizontalWidth}
        height={horizontalHeight}
        x={x + verticalWidth}
        y={y + verticalHeight * 2}
      />
      {/* 大命年龄区间 */}
      <NatalPalaceHorizontalBox
        name={palace.ten}
        width={horizontalWidth}
        height={horizontalHeight}
        x={x + verticalWidth}
        y={y + verticalHeight * 2 + horizontalHeight}
      />
      <NatalPalaceStars x={x} y={y} stars={palace.stars} />
    </Group>
  );
}
