import { Text, Group, Arrow } from "react-konva";
import type { NatalPalaceStar } from "@unknown/core";
import { Fragment } from "react";

export interface NatalPalaceStarsProps {
  x: number;
  y: number;
  fontSize?: number;
  stars: NatalPalaceStar[];
}

export function NatalPalaceStars({
  x,
  y,
  stars,
  fontSize = 18,
}: NatalPalaceStarsProps) {
  return (
    <Group>
      {stars.map(({ star, selfTransform }, index) => (
        <Fragment key={star}>
          <Text
            text={star.split("").join("\n")}
            fontSize={fontSize}
            x={x + index * (fontSize + 2) + 5}
            y={y + 8}
          />
          {selfTransform && (
            <Text
              text={selfTransform}
              fontSize={fontSize}
              fill="red"
              fontStyle="bold"
              x={x + index * (fontSize + 2) + 5 + 5 / 2}
              y={y + 8 + fontSize * 2}
            />
          )}
          <Arrow
            x={x}
            y={y}
            points={[10, 0, 100, 100]}
            pointerLength={10}
            pointerWidth={10}
            fill="red"
            stroke="red"
            strokeWidth={2}
          />
        </Fragment>
      ))}
    </Group>
  );
}
