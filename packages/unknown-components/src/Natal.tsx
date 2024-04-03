import { useNatal, usePalace } from "@unknown/hooks";
import type { NatalCreateOptions } from "@unknown/core";
import { Stage, Layer } from "react-konva";
import { NatalPalace } from "./NatalPalace";

export interface NatalProps extends NatalCreateOptions {
  className?: string;
  width: number;
  height: number;
  padding?: number;
}

export function Natal({
  className,
  width,
  height,
  padding = 20,
  ...props
}: NatalProps) {
  const { natal } = useNatal(props);
  const { palaceWidth, palaceHeight, palacePositions } = usePalace({
    containerWidth: width,
    containerHeight: height,
    containerPadding: padding,
  });

  console.log(natal);

  return (
    <Stage className={className} width={width} height={height}>
      <Layer>
        {natal.palaces.map((palace, index) => (
          <NatalPalace
            key={palace.name}
            width={palaceWidth}
            height={palaceHeight}
            x={palacePositions[index].x}
            y={palacePositions[index].y}
            palace={palace}
          />
        ))}
      </Layer>
    </Stage>
  );
}
