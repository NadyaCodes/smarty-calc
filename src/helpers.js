export const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "-"];

export const symbolsArray = ["\u002B", "\u2212", "\u2715", "\u00F7"];

const mathFunc = (symbol, current, next) => {
  const firstNum = parseFloat(current);
  const secondNum = parseFloat(next);
  switch (symbol) {
    case "\u002B":
      return firstNum + secondNum;
    case "\u2212":
      return firstNum - secondNum;
    case "\u2715":
      return firstNum * secondNum;
    case "\u00F7":
      return firstNum / secondNum;
    default:
      return;
  }
};

export const calc = (array, settingFunc) => {
  if (array[0] === "---") {
    array.splice(0, 1);
  }

  if (typeof array[array.length - 1] === "string") {
    array.pop();
    if (typeof array[array.length - 1] === "string") {
      array.pop();
    }
  }

  let nums = [];
  let syms = [];
  let num = "";
  let i = 0;
  while (i < array.length + 1) {
    if (typeof array[i] === "number") {
      num += array[i];
    }
    if (typeof array[i] === "string") {
      if (array[i] === "." || array[i] === "-") {
        num += array[i];
      } else {
        syms.push(array[i]);
        nums.push(num);
        num = "";
      }
    }
    i++;
  }
  nums.push(num);
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    answer = mathFunc(syms[i - 1], answer, nums[i]);
  }
  return settingFunc(answer);
};
