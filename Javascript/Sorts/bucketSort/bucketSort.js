/*
Description:
Time complexity:
  Best case: O(n+k)
  Average case: O(n+k)
  Worst case: O(n^2)
Space complexity: O(n)
Stable: Depends
Method: Spacing
*/

const bucketSort = (list, size) => {
  if (size === undefined) {
    size = 5;
  }
  if (list.length <= 1) {
    return list;
  }

  const setMinAndMax = (items) => {
    let min, max = [0, 0]
    for (let i = 0; i < items.length; i++) {
      if (items[i] < min) {
        min = items[i];
      } else if (items[i] > max) {
        max = items[i];
      }
    }
    return [min, max];
  }
  const [min, max] = setMinAndMax(list);
  const bucketCount = Math.floor((max - min) / size) + 1;
  const buckets = new Array(bucketCount).fill([]);

  // bucket fill
  for (let i = 0; i < list.length; i++) {
    const key = Math.floor((list[i] - min) / size);
    buckets[key].push(list[i]);
  }

  // now sort every bucket and merge it to the sorted list
  const sorted = [];
  for (let i = 0; i < buckets.length; i++) {
    const arr = buckets[i].sort((a, b) => a - b);
    for (let j = 0; j < arr.length; j++) {
      sorted.push(arr[j]);
    }
  }
  return sorted;
};

console.log('count:', new Array(5).fill([]))