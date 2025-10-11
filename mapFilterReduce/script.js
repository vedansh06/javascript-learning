/// MAP

const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

const output = arr.map(double);
const output1 = arr.map(triple);
const output2 = arr.map(binary);

console.log(output);
console.log(output1);
console.log(output2);

// FILTER

const arr1 = [5, 1, 3, 2, 6, 10, 9, 8, 4, 7];

// filter odd values

function isOdd(x) {
  return x % 2;
}

const output3 = arr1.filter(isOdd);

console.log(output3);

// filter even values

function isEven(x) {
  return x % 2 === 0;
}

const output4 = arr1.filter(isEven);

console.log(output4);

// greater than 4

function greaterThan(x) {
  return x > 4;
}

const output5 = arr1.filter(greaterThan);

console.log(output5);

// less than 5

// function greaterThan(x){
// }

// const output6 = arr1.filter((x) => x < 5)

// console.log(output6)

// REDUCE

const arr2 = [1, 2, 3, 5, 6, 7, 4, 8, 9];

// sum

function findSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr2[i];
  }
  return sum;
}
console.log(findSum(arr2));

const output7 = arr2.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output7);

// max

function findMax(arr) {
  let max = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr2));

const output8 = arr2.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(output8);

// MAP , FILTER , REDUCE

const users = [
  { firstName: "Elon", lastName: "Musk", age: 60 },
  { firstName: "Jeff", lastName: "Bezos", age: 75 },
  { firstName: "Mark", lastName: "Zuckerberg", age: 50 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
];

//  list of full names

const output9 = users.map((x) => x.firstName + " " + x.lastName);

console.log(output9);

// acc = {75 : 2 , 60 : 1 ,50 : 1 }

const output10 = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output10);

const output11 = users.filter((x) => x.age < 75);

console.log(output11);

const output12 = users.filter((x) => x.age < 75).map((x) => x.firstName);

console.log(output12);

const userList = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }

  return acc;
}, []);

console.log(userList);
