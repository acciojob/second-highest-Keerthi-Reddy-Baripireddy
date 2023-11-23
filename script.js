// Complete the function within the designated area in the main.html file
function secondHighest(arr) {
  // Check if arr is empty or has only 1 element
  if (arr.length < 2) {
    return -Infinity;
  }

  // Remove duplicates and sort the array in descending order
  const sortedArr = [...new Set(arr)].sort((a, b) => b - a);

  // If all elements are the same, return -Infinity
  if (sortedArr[0] === sortedArr[1]) {
    return -Infinity;
  }

  // Return the second-highest element
  return sortedArr[1];
}

// Examples
console.log(secondHighest([5, 1, 2, 3, 4])); // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // Output: -2
console.log(secondHighest([])); // Output: -Infinity
console.log(secondHighest([1])); // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1])); // Output: -Infinity
