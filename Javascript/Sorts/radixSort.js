/*
Description:
Time complexity:
  Best case: O(nk)
  Average case: O(nk)
  Worst case: O(nk)
Space complexity: O(n+k)
Stable: Yes
Method: Non-comparative
*/

const radixSort = (items, RADIX) => {
  // default radix is then because we usually count to base 10
  if (RADIX === undefined || RADIX < 1) {
    RADIX = 10;
  }

  let maxLength = false;
  let placement = 1;

  while (!maxLength) {
    maxLength = true;
    const buckets = [];

    for (let i = 0; i < RADIX; i++) {
      buckets.push([]);
    }

    for (let j = 0; j < items.length; j++) {
      const tmp = items[j] / placement;
      buckets[Math.floor(tmp % RADIX)].push(items[j]);
      if (maxLength && tmp > 0) {
        maxLength = false;
      }
    }

    let a = 0;
    for (let b = 0; b < RADIX; b++) {
      const buck = buckets[b];
      for (let k = 0; k < buck.length; k++) {
        items[a] = buck[k];
        a++;
      }
    }
    placement *= RADIX;
  }
  return items;
};
