function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; // potential bug: should handle negative results
}

let result1 = add(5, 3); // result1 = 8
let result2 = subtract(5, 10); // result2 = -5, no error

console.log(result1); // 8
console.log(result2); // -5