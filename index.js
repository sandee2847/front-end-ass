function findSquare(arr) {
  const arrLen = arr.length;
  let value = 0;

  for (let k = 1; k <= arrLen; k++) {
    let found = false;

    for (let i = 0; i <= arrLen - k; i++) {
      let check = Infinity;
      console.log("check", check);

      for (let j = i; j < i + k; j++) {
        check = Math.min(check, arr[j]);
        console.log("check inner loop", check, arr[j]);
      }

      if (check >= k) {
        found = true;
        break;
      }
    }

    if (found) {
      value = k;
    } else {
      break;
    }
  }

  return maxSide;
}

// const arrValue = [1, 2, 5, 3, 1, 3];
// const arrValue = [6, 5, 5, 6, 2, 2];
const arrValue = [3, 3, 3, 5, 4];
console.log(findSquare(arrValue));
