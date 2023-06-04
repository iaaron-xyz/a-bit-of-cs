/**
 * 
 * The Fibonacci numbers, commonly denoted F(n) form a sequence,
 * called the Fibonacci sequence, such that each number is the sum of
 * the two preceding ones, starting from 0 and 1.
 */

function fibs(n) {
  // initial numbers
  let fib_nums = [0, 1];
  // base cases
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return fib_nums;
  }
  // generate sequence
  for (let i = 1; i < n; i += 1) {
    fib_nums.push(fib_nums[i-1] + fib_nums[i]);
  }

  return fib_nums;
}

console.log(fibs(0)); // [0]
console.log(fibs(1)); // [0,1]
console.log(fibs(2)); // [0,1,1]
console.log(fibs(3)); // [0,1,1,2]
console.log(fibs(4)); // [0,1,1,2,3]
console.log(fibs(5)); // [0,1,1,2,3,5]
console.log(fibs(6)); // [0,1,1,2,3,5,8]
console.log(fibs(7)); // [0,1,1,2,3,5,8,13]
console.log(fibs(8)); // [0,1,1,2,3,5,8,13,21]
console.log(fibs(9)); // [0,1,1,2,3,5,8,13,21,34]
console.log(fibs(13)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418]