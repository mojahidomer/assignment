const prompt = require("prompt-sync")({ sigint: true });
function InputData(n, arr) {
  let prev = 0;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (i !== 0) {
      count = parseInt(arr[i]) - parseInt(prev);
      //console.log(count);
      if (count < 0) {
        count = parseInt(count) * -1;
      }
      count = count - 1;

      sum = parseInt(sum) + parseInt(count);
    }
    prev = arr[i];
  }
  return sum;
}

let t = prompt("");
while (t--) {
  let num = prompt("");
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = prompt("");
  }
  //clsconsole.log(arr);
  let result = InputData(num, arr);
  console.log(result);
}
