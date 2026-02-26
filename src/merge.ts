export const merge = (
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] => {
  const arr = [...collection_1, ...collection_2, ...collection_3];
  const results: number[] = [];

  while (arr.length > 0) {
    const { min, index } = _min(arr);

    arr.splice(index, 1);
    results.push(min);

    //console.log(arr);
  }

  return results;
};

const _min = (arr: number[]): { min: number; index: number } => {
  if (arr.length === 0) {
    return { min: Infinity, index: -1 };
  }

  let min = arr[0]!;
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i]! < min) {
      min = arr[i]!;
      index = i;
    }
  }

  return { min, index };
};
