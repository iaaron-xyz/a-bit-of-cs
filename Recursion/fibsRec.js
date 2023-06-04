/**
 * 
 * @param {integer} n 
 * @param {array} s 
 * @returns {array}
 */

function fibsRec(n, s = [0, 1]) {
  // base case
  if (s.length > n) return s.slice(0,n+1);
  // add new number to the sequence
  return fibsRec(n, [...s, s.at(-2) + s.at(-1)] );
}


console.log(`n=0, [${fibsRec(0)}]`); // [0]
console.log(`n=1, [${fibsRec(1)}]`); // [0,1]
console.log(`n=3, [${fibsRec(2)}]`); // [0,1,1]
console.log(`n=4, [${fibsRec(4)}]`); // [0,1,1,2]
console.log(`n=6, [${fibsRec(6)}]`); // [0,1,1,2,3,5,8]
console.log(`n=9, [${fibsRec(9)}]`); // [0,1,1,2,3,5,8,13,21,34]