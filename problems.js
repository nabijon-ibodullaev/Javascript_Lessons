//---------------------Objectdagi faqat string type key value larni chiqarish----------------------

let car = {
  model: "Tesle",
  make: "Tesla Company",
  year: 2021,
  color: "black",
  price: 50000,
};
function showPr(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log("Object string types - " + key, obj[key]);
    }
  }
}
showPr(car);

//-------------------- 2 ta sonni o'rnini almashtirish------------------------
let color1 = "qora";
let color2 = "oq";

let color3 = color1;
color1 = color2;

color2 = color3;

console.log("color1  - " + " " + color1);
console.log("color2  - " + " " + color2);

//-----------------------------Talaba olgan balini hisoblash---------------------------

// 0 - 50    "A"
// 51 - 60   "B"
// 61 - 70   "C"
// 71 - 80   "D"
// 81 - 100  "E"

const marks = [81, 76, 86, 79, 90];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let avr = calculateAverage(marks);
  if (avr <= 50) return "A";
  if (avr <= 60) return "B";
  if (avr <= 70) return "C";
  if (avr <= 80) return "D";
  return "Talaba Bahosi -" + " " + "E";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += array;
    let avr = sum / value.length;
    return avr;
  }
}

// -------------chegaragacha tub sonlarni topuvchi func---------------------

showPrimeNumbers(20);

function showPrimeNumbers(limit) {
  for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log("Tub sonlar - " + " " + i);
  }
}

//  [1 , 5]  1 dan 5 gacha sonla chiqiwi garak

let nums = arrayF(6, 10);
console.log(nums);

function arrayF(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }

  return result;
}

const numbers0 = [1, 2, 3, 4, 5];
let exact = includes(numbers0, 3);

function includes(array, find) {
  for (let arr of array) if (arr === find) return true;
  return false;
}
console.log(exact);
