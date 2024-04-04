import { Text, Group, Arrow, Rect } from "react-konva";
import type { NatalPalaceStar } from "@unknown/core";
import { EnergyColors } from "@unknown/core";
import { Fragment } from "react";
import { NatalPalaceCentrifugeSelfTransform } from "./NatalPalaceCentrifugeSelfTransform";

export interface NatalPalaceStarsProps {
  x: number;
  y: number;
  fontSize?: number;
  stars: NatalPalaceStar[];
  selfTransform: string[];
  index: number;
}

export function NatalPalaceStars({
  x,
  y,
  stars,
  fontSize = 18,
  index: palaceIndex,
  selfTransform: selfTransformList,
}: NatalPalaceStarsProps) {
  const [boxWidth, boxHeight] = [fontSize + 2, fontSize * 2 + 4];
  const padding = 4;

  return (
    <Group>
      {stars.map(({ star, selfTransform, centrifugeSelfTransform }, index) => {
        const color = EnergyColors[selfTransformList.indexOf(star)];

        return (
          <Fragment key={star}>
            <Rect
              width={boxWidth}
              height={boxHeight}
              x={x + index * boxWidth + padding + 1}
              y={y + padding}
              fill={color ?? "transparent"}
            />
            <Text
              text={star.split("").join("\n")}
              fontSize={fontSize}
              x={x + index * boxWidth + padding + 2}
              y={y + padding + (boxHeight - fontSize * 2)}
              fill={color ? "white" : "black"}
            />
            {selfTransform && (
              <Text
                text={selfTransform}
                fontSize={fontSize}
                fill="red"
                fontStyle="bold"
                x={x + index * boxWidth + padding + 2 + 5 / 2}
                y={y + padding * 2 + fontSize * 2}
              />
            )}
            <Group>
              {centrifugeSelfTransform && (
                <NatalPalaceCentrifugeSelfTransform
                  x={x}
                  y={y}
                  boxWidth={boxWidth}
                  fontSize={fontSize}
                  padding={padding}
                  palaceIndex={palaceIndex}
                  starIndex={index}
                />
              )}
            </Group>
          </Fragment>
        );
      })}
    </Group>
  );
}
