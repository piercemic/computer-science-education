/*
Description: Repeatedly swaps adjacent elements if they're not
in the desired order.
Time complexity:
  Best case: O(n*logn)
  Average case: O(n*logn)
  Worst case: O(n^n)
Space complexity: O(1)
Stable: Yes
Method: Exchanging
Applications:
  Detecting small errors in almost-sorted arrays for computer graphics
*/

const bubbleSort = (items) => {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < items.length - 1; i++) {
      const current = items[i];
      const next = items[i + 1];
      if (current > next) {
        [current, next] = [next, current];
        swapped = true;
      }
    }
  }

  return items;
};

/*
Given an array of n input integers, return the sum of maximum and minimum elements of the array.
[Constraint: Use BubbleSort]

Input:
  n -> Size of array(n>1)
  'n' array of elements below
Output: A single line representing the required sum
*/
