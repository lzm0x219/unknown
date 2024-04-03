export interface UsePalaceOption {
  containerWidth: number;
  containerHeight: number;
  containerPadding: number;
}

export function usePalace({
  containerWidth,
  containerHeight,
  containerPadding,
}: UsePalaceOption) {
  const palaceWidth = (containerWidth - containerPadding * 2) / 4;
  const palaceHeight = (containerHeight - containerPadding * 2) / 4;

  return {
    palaceWidth,
    palaceHeight,
    palacePositions: [
      {
        x: containerPadding + palaceWidth * 0,
        y: containerPadding + palaceHeight * 3,
      },
      {
        x: containerPadding + palaceWidth * 0,
        y: containerPadding + palaceHeight * 2,
      },
      {
        x: containerPadding + palaceWidth * 0,
        y: containerPadding + palaceHeight * 1,
      },
      {
        x: containerPadding + palaceWidth * 0,
        y: containerPadding + palaceHeight * 0,
      },
      {
        x: containerPadding + palaceWidth * 1,
        y: containerPadding + palaceHeight * 0,
      },
      {
        x: containerPadding + palaceWidth * 2,
        y: containerPadding + palaceHeight * 0,
      },
      {
        x: containerPadding + palaceWidth * 3,
        y: containerPadding + palaceHeight * 0,
      },
      {
        x: containerPadding + palaceWidth * 3,
        y: containerPadding + palaceHeight * 1,
      },
      {
        x: containerPadding + palaceWidth * 3,
        y: containerPadding + palaceHeight * 2,
      },
      {
        x: containerPadding + palaceWidth * 3,
        y: containerPadding + palaceHeight * 3,
      },
      {
        x: containerPadding + palaceWidth * 2,
        y: containerPadding + palaceHeight * 3,
      },
      {
        x: containerPadding + palaceWidth * 1,
        y: containerPadding + palaceHeight * 3,
      },
    ],
  };
}
