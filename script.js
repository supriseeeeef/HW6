let hw1 = 1;
while (hw1 <= 10) {
    console.log(hw1);
    hw1++;
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    console.log(i * 7);
}

let nums = [1, 2, 3, 4, 5];
let count = 0;
while (count < nums.length) {
    console.log(nums[count]);
    count++
}

let numms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numms.length; i++) {
    if (numms[i] === 7) {
        break;
    };
    console.log(numms[i])
}

let n = parseInt(prompt("введіть n"));
let numms1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numms1.length; i++) {
    if (numms1[i] === n) {
        break;
    };
    console.log(numms1[i])
}

let last = 1;
while (last <= 20) {
    if (last % 3 === 0) {
        last++;
        continue;
    }
    console.log(last);
    last++;
}