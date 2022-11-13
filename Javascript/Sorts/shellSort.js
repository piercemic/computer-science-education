/*
Description:
Time complexity:
  Best case: O(n*logn)
  Average case: Depends on gap size
  Worst case: Depends on gap size
Space complexity: O(1)
Stable: No
Method: Insertion
*/

const shellSort = (items) => {
  let interval = 1;

  while (interval < items.length / 3) {
    interval = interval * 3 + 1;
  }

  while (interval > 0) {
    for (let outer = interval; outer < items.length; outer++) {
      const value = items[outer];
      let inner = outer;

      while (inner > interval - 1 && items[inner - interval] >= value) {
        items[inner] = items[inner - interval];
        inner = inner - interval;
      }
      items[inner] = value;
    }
    interval = (interval - 1) / 3;
  }
  return items;
};
