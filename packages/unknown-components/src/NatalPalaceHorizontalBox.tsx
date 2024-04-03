import Konva from "konva";
import { useEffect, useRef, useState } from "react";
import { Group, Rect, Text } from "react-konva";

export interface NatalPalaceHorizontalBoxProps {
  width: number;
  height: number;
  x: number;
  y: number;
  name: string;
  fontSize?: number;
}

export function NatalPalaceHorizontalBox({
  width,
  height,
  x,
  y,
  name,
  fontSize = 18,
}: NatalPalaceHorizontalBoxProps) {
  const [textWidth, setTextWidth] = useState<number>(0);
  const [textHeight, setTextHeight] = useState<number>(0);

  const textRef = useRef<Konva.Text>(null);

  useEffect(() => {
    setTextWidth(textRef.current?.textWidth || 0);
    setTextHeight(textRef.current?.textHeight || 0);
  }, []);

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
        ref={textRef}
        text={name}
        fontSize={fontSize}
        x={x + width / 2 - textWidth / 2}
        y={y + height / 2 - textHeight / 2 + 2}
      />
    </Group>
  );
}
