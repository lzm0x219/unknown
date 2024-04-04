import { Arrow, Group } from "react-konva";

export interface NatalPalaceCentrifugeSelfTransformProps {
  x: number;
  y: number;
  boxWidth: number;
  fontSize: number;
  padding: number;
  palaceIndex: number;
  starIndex: number;
}

export function NatalPalaceCentrifugeSelfTransform({
  x,
  y,
  boxWidth,
  fontSize,
  padding,
  palaceIndex,
  starIndex,
}: NatalPalaceCentrifugeSelfTransformProps) {
  const getArrowPoints = (n: number, starIndex: number) => {
    if (n > 0 && n < 3) {
      return {
        x: x + starIndex * boxWidth + padding + 2 + 5 / 2,
        y: y + padding * 2 + fontSize * 2,
        points: [0, 0, 0, 0, 0, 40, -45, 40],
        pointerLength: 5,
        pointerWidth: 5,
      };
    }
    if (n >= 3 && n < 6) {
      return {
        x: x + starIndex * boxWidth + padding + 2 + fontSize / 2,
        y: y + padding * 2,
        points: [0, 0, 0, -30],
        pointerLength: 5,
        pointerWidth: 5,
      };
    }
    if (n >= 6 && n < 9) {
      return {
        x: x + starIndex * boxWidth + padding + 2 + fontSize / 2,
        y: y + padding * 2 + fontSize * 2,
        points: [0, 0, 0, 0, 0, 40, 125, 40],
        pointerLength: 5,
        pointerWidth: 5,
      };
    }
    return {
      x: x + starIndex * boxWidth + padding + 2 + fontSize / 2,
      y: y + padding * 2 + fontSize * 2,
      points: [0, 0, 0, 116],
      pointerLength: 5,
      pointerWidth: 5,
    };
  };

  const arrow = getArrowPoints(palaceIndex, starIndex);

  return (
    <Group>
      <Arrow {...arrow} fill="red" stroke="red" strokeWidth={1} />
    </Group>
  );
}
