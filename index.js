// Problem 1:
function anaToVori(ana) {
  let vori = ana / 16;
  if (typeof ana !== "number") {
    return " Please enter a number ";
  } else if (ana <= 0) {
    return " Please enter a positive number or enter more than 0 ";
  } else {
    return vori;
  }
}
const totalVori = anaToVori(10);
console.log(totalVori);

// Problem 2:
function pandaCost(singaraQuantiy, samuchaQuanity, jilapiQuanity) {
  let singaraPrice = singaraQuantiy * 7;
  let sanuchaPrice = samuchaQuanity * 10;
  let jilapiPrice = jilapiQuanity * 15;
  let total = singaraPrice + sanuchaPrice + jilapiPrice;
  if (
    typeof singaraQuantiy !== "number" &&
    typeof samuchaQuanity !== "number" &&
    typeof jilapiQuanity !== "number"
  ) {
    return " Please enter a number ";
  } else if (singaraQuantiy < 0 && samuchaQuanity < 0 && jilapiQuanity < 0) {
    return " Please enter a positive number ";
  } else {
    return total;
  }
}
const foodPrice = pandaCost(1, 1, 1);
console.log(foodPrice);

// Problem 3:
function picnicBudget(people) {
  const firstBudget = 5000;
  const secondBudget = 4000;
  const otherBudget = 3000;
  let total;
  if (typeof people !== "number") {
    return " Please enter a number ";
  } else if (people <= 0) {
    return " Please enter a positive number or enter more then 0 ";
  } else if (people <= 100) {
    total = people * firstBudget;
    return total;
  } else if (people <= 200) {
    let first100Budget = 100 * firstBudget;
    let restpeople = people - 100;
    let second100Budget = restpeople * secondBudget;
    total = first100Budget + second100Budget;
    return total;
  } else {
    let first100Budget = 100 * firstBudget;
    let second100Budget = 100 * secondBudget;
    let allOthersBudget = (people - 200) * otherBudget;
    total = first100Budget + second100Budget + allOthersBudget;
    return total;
  }
}
const totalBudget = picnicBudget(100);
console.log(totalBudget);

// Problem 4:
const friend = ["Copper", "Jhon", "Robinson", "jamali", "shovro", "Maria"];
function oddFriend(friendNames) {
  for (let i = 0; i < friendNames.length; i++) {
    const element = friendNames[i];
    let name = element.length;
    let remainer = name % 2;
    if (remainer != 0) {
      return element;
    } else {
    }
  }
}
const oddNamedFriend = oddFriend(friend);
console.log(oddNamedFriend);
