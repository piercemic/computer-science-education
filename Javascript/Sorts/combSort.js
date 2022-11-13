/*
Description:
Time complexity:
  Best case: O(n*logn)
  Average case: O(n^2/2^p)
  Worst case: O(n^2)
Space complexity: O(1)
Stable: Yes
Method: Exchanging
*/

const combSort = (list) => {
  if (list.length === 0) {
    return list
  }
  const shrink = 1.3
  let gap = list.length
  let isSwapped = true
  let i = 0

  while (gap > 1 || isSwapped) {
    // Update the gap value for a next comb
    gap = parseInt(parseFloat(gap) / shrink, 10)

    isSwapped = false
    i = 0

    while (gap + i < list.length) {
      if (list[i] > list[i + gap]) {
        [list[i], list[i + gap]] = [list[i + gap], list[i]]
        isSwapped = true
      }
      i += 1
    }
  }
  return list
}