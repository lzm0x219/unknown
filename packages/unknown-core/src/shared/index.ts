export function fixIndex(index: number, total: number = 12) {
  if (index < 0) {
    return index + total;
  }
  if (index >= total) {
    return index - total;
  }
  return index;
}

export function selectElements<T>(arr: T[], startIndex: number, n: number = 3) {
  const length = arr.length;
  startIndex = ((startIndex % length) + length) % length;
  const selectedElements: T[] = [];
  for (let i = 0; i < n; i++) {
    const index = (startIndex + i) % length;
    selectedElements.push(arr[index]);
  }
  return selectedElements;
}
