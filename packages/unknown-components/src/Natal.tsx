import { useNatal, usePalace } from "@unknown/hooks";
import type { NatalCreateOptions } from "@unknown/core";
import { Stage, Layer } from "react-konva";
import { NatalPalace } from "./NatalPalace";
import { useEffect, useState } from "react";
import { NatalPalaceControl } from "./NatalPalaceControl";

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
  padding = 25,
  ...props
}: NatalProps) {
  const { natal } = useNatal(props);
  const { palaceWidth, palaceHeight, palacePositions } = usePalace({
    containerWidth: width,
    containerHeight: height,
    containerPadding: padding,
  });

  const [selectedIndex, setSelectedIndex] = useState<number>();

  const currentTenIndex = 2;

  console.log(natal);

  natal.setCurrentTenIndex(currentTenIndex);

  return (
    <Stage className={className} width={width} height={height}>
      <Layer>
        <NatalPalaceControl
          x={palaceWidth + padding}
          y={palaceHeight + padding}
          width={width - palaceWidth * 2 - padding * 2}
          height={height - palaceHeight * 2 - padding * 2}
          name={natal.profile.name}
          fiveElementName={natal.profile.fiveElementName}
          gender={natal.profile.gender}
          birthday={props.birthday}
        />
        {natal.palaces.map((palace, index) => (
          <NatalPalace
            key={palace.name}
            width={palaceWidth}
            height={palaceHeight}
            x={palacePositions[index].x}
            y={palacePositions[index].y}
            palace={palace}
            isNatalTen={
              currentTenIndex === natal.getTenPositionNameIndex(index)
            }
            isSelected={index === selectedIndex}
            selectedSelfTransform={
              selectedIndex !== undefined
                ? natal.palaces[selectedIndex].selfTransform
                : []
            }
            onClick={() => {
              if (selectedIndex !== index) {
                setSelectedIndex(index);
              } else {
                setSelectedIndex(undefined);
              }
            }}
          />
        ))}
      </Layer>
    </Stage>
  );
}
