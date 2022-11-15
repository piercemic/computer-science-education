/*
Description:
Time complexity:
  Best case: O(n*logn)
  Average case: O(n*logn)
  Worst case: O(n*n)
Space complexity: O(1)
Stable: Yes
Method: Insertion
Applications
  When list is nearly sorted
  Sorting small lists
*/

const insertionSort = (numbers) => {
  for (let i = 1; i < numbers.length; i++) {
    let j;
    const unsortedItem = numbers[i];
    /* Check through the sorted part and compare with the number in tmp. If large, shift the number */
    for (j = i - 1; j >= 0 && numbers[j] > unsortedItem; j--) {
      numbers[j + 1] = numbers[j];
    }

    numbers[j + 1] = unsortedItem;
  }
  return numbers;
};
console.log(insertionSort([43, 2, 23, 32, 1, 3]));
