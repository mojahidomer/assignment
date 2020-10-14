const prompt = require("prompt-sync")({ sigint: true });

let arr = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];
let count = 0;
let pair_sum = 11; //prompt("");
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    let sum = parseInt(arr[i]) + parseInt(arr[j]);

    if (sum == pair_sum) {
      count += 1;
    }
  }
}
console.log(count);
