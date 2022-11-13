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
  if (undefined === size) {
    size = 5;
  }
  if (list.length === 0) {
    return list;
  }
  let min = list[0];
  let max = list[0];
  // find min and max
  for (let iList = 0; iList < list.length; iList++) {
    if (list[iList] < min) {
      min = list[iList];
    } else if (list[iList] > max) {
      max = list[iList];
    }
  }
  // how many buckets we need
  const count = Math.floor((max - min) / size) + 1;

  // create buckets
  const buckets = [];
  for (let iCount = 0; iCount < count; iCount++) {
    buckets.push([]);
  }

  // bucket fill
  for (let iBucket = 0; iBucket < list.length; iBucket++) {
    const key = Math.floor((list[iBucket] - min) / size);
    buckets[key].push(list[iBucket]);
  }
  const sorted = [];
  // now sort every bucket and merge it to the sorted list
  for (let iBucket = 0; iBucket < buckets.length; iBucket++) {
    const arr = buckets[iBucket].sort((a, b) => a - b);
    for (let iSorted = 0; iSorted < arr.length; iSorted++) {
      sorted.push(arr[iSorted]);
    }
  }
  return sorted;
};
