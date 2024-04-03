import { Group, Text, Rect } from "react-konva";

export interface NatalPalaceOriginProps {
  width: number;
  height: number;
  x: number;
  y: number;
  fontSize?: number;
}

export function NatalPalaceOrigin({
  x,
  y,
  width,
  height,
  fontSize = 12,
}: NatalPalaceOriginProps) {
  return (
    <Group>
      <Rect
        width={width}
        height={height}
        stroke="red"
        strokeWidth={1}
        cornerRadius={[5, 5, 5, 5]}
        x={x}
        y={y}
      />
      <Text
        text={"来\n因"}
        x={x + width / 2 - fontSize / 2}
        y={y + height / 2 - fontSize}
        fill="red"
        fontSize={fontSize}
      />
    </Group>
  );
}
