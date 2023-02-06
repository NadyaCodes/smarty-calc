export const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "-"];

export const symbolsArray = ["\u002B", "\u2212", "\u2715", "\u00F7"];

const mathFunc = (symbol, current, next) => {
  const firstNum = parseFloat(current);
  const secondNum = parseFloat(next);
  switch (symbol) {
    case "\u002B":
      let addedAnswer = (firstNum + secondNum).toFixed(10);
      while (
        addedAnswer[addedAnswer.length - 1] === "0" &&
        addedAnswer[addedAnswer.length - 1] !== "."
      ) {
        addedAnswer = addedAnswer.slice(0, -1);
      }
      if (addedAnswer[addedAnswer.length - 1] === ".") {
        addedAnswer = addedAnswer.slice(0, -1);
      }
      return addedAnswer;

    case "\u2212":
      let subAnswer = (firstNum - secondNum).toFixed(10);
      while (
        subAnswer[subAnswer.length - 1] === "0" &&
        subAnswer[subAnswer.length - 1] !== "."
      ) {
        subAnswer = subAnswer.slice(0, -1);
      }
      if (subAnswer[subAnswer.length - 1] === ".") {
        subAnswer = subAnswer.slice(0, -1);
      }
      return subAnswer;
    case "\u2715":
      let multAnswer = (firstNum * secondNum).toFixed(10);
      while (
        multAnswer[multAnswer.length - 1] === "0" &&
        multAnswer[multAnswer.length - 1] !== "."
      ) {
        multAnswer = multAnswer.slice(0, -1);
      }
      if (multAnswer[multAnswer.length - 1] === ".") {
        multAnswer = multAnswer.slice(0, -1);
      }
      return multAnswer;
    case "\u00F7":
      let divAnswer = (firstNum / secondNum).toFixed(10);
      while (
        divAnswer[divAnswer.length - 1] === "0" &&
        divAnswer[divAnswer.length - 1] !== "."
      ) {
        divAnswer = divAnswer.slice(0, -1);
      }
      if (divAnswer[divAnswer.length - 1] === ".") {
        divAnswer = divAnswer.slice(0, -1);
      }
      return divAnswer;
    default:
      return;
  }
};

export const calc = (array, settingFunc, showFunc) => {
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
  showFunc(false);
  return settingFunc(answer);
};
