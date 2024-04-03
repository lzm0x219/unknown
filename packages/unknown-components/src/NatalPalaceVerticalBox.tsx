import { Group, Rect, Text } from "react-konva";

export interface NatalPalaceVerticalBoxProps {
  width: number;
  height: number;
  x: number;
  y: number;
  name: string;
  fontSize?: number;
}

export function NatalPalaceVerticalBox({
  width,
  height,
  x,
  y,
  name,
  fontSize = 18,
}: NatalPalaceVerticalBoxProps) {
  return (
    <Group>
      <Rect
        width={width}
        height={height}
        x={x}
        y={y}
        stroke="black"
        strokeWidth={2}
      />
      <Text
        text={name}
        fontSize={fontSize}
        x={x + width / 2 - fontSize / 2}
        y={y + (height - fontSize * 2) / 2 + 2}
      />
    </Group>
  );
}
