import Konva from "konva";
import { useEffect, useRef, useState } from "react";
import { Group, Rect, Text } from "react-konva";

export interface NatalPalaceControlProps {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  gender: string;
  birthday: string;
  fiveElementName: string;
}

export function NatalPalaceControl({
  x,
  y,
  width,
  height,
  name,
  gender,
  birthday,
  fiveElementName,
}: NatalPalaceControlProps) {
  const [nameWidth, setNameWidth] = useState<number>(0);
  const [paddingX, paddingY] = [20, 40];
  const nameRef = useRef<Konva.Text>(null);

  const [nameX, nameY] = [x + paddingX, y + paddingY];
  const [genderX, genderY] = [x + nameWidth + paddingX + 40, y + paddingY];
  const [fiveElementNameX, fiveElementNameY] = [genderX + 14 * 2 + 10, genderY];

  useEffect(() => {
    setNameWidth(nameRef.current?.textWidth || 0);
  }, []);

  return (
    <Group>
      <Rect x={x} y={y} width={width} height={height} />
      <Text
        ref={nameRef}
        text={`姓名：${name}`}
        x={nameX}
        y={nameY}
        fontSize={14}
      />
      <Text text={gender} x={genderX} y={genderY} fontSize={14} />
      <Text
        text={fiveElementName}
        x={fiveElementNameX}
        y={fiveElementNameY}
        fontSize={14}
      />
      <Text text={`农历：${birthday}`} x={nameX} y={y + 80} fontSize={14} />
    </Group>
  );
}
