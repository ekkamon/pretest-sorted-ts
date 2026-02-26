import { merge } from '../src/merge';

describe('Test Merge', () => {
  test('Case 1: Array 1-2 is already sorted', () => {
    expect(merge([1, 2, 3], [4, 5, 6], [9, 7, 8])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  test('Case 2: Array 3 is already desc sorted', () => {
    expect(merge([4, 6, 3], [5, 1, 2], [10, 9, 8])).toEqual([
      1, 2, 3, 4, 5, 6, 8, 9, 10,
    ]);
  });

  test('When input empty array return must be empty array', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test('When input diff of size return must be sorted', () => {
    expect(merge([2, 3], [4, 5, 6], [1])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
