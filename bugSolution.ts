function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  //Handle negative results
  const result = a - b;
  if (result < 0) {
    console.warn('Result is negative:', result); 
    //Optionally throw error or return 0
    return 0; //Example: return 0 for negative values
  }  
  return result;
}

let result1 = add(5, 3); // result1 = 8
let result2 = subtract(5, 10); // result2 = 0, warning logged

console.log(result1); // 8
console.log(result2); // 0