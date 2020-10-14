const prompt = require("prompt-sync")({ sigint: true });

let t = prompt("");
while (t--) {
  let num = prompt("");
  let arr = [];
  let me = 0;
  let mont = 0;
  for (let i = 0; i < num; i++) {
    let A = prompt("");
    let B = prompt("");
    if (A > B) {
      me += 1;
    } else if (B > A) {
      mont += 1;
    } else {
      me += 1;
      mont += 1;
    }
  }
  if (me == mont) {
    console.log(2, " ", me);
  } else if (me > mont) {
    console.log(0, "  ", me);
  } else {
    console.log(1, "  ", mont);
  }
}
