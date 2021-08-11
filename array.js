// ------------------------- Massiv -----------------------

console.log("MASSIVLAR");
const fruits = ["apple", "orange", "apricot", "banana", "strawberry"];
//new element qoshish

console.log("Massiv elementlari :" + " " + fruits);
console.log("1 - elementi :" + " " + fruits[0]);
console.log("2 - elementi :" + " " + fruits[1]);
console.log("3 - elementi :" + " " + fruits[2]);
console.log("4 - elementi :" + " " + fruits[3]);

console.log("MASSIV Xossalari");
//massiv xossalari
fruits.reverse(); // saralashni olib tashlash
fruits.sort(); // saralash
fruits.pop(); //strawberry remove
fruits.push("strawberry"); // add strawberry
fruits.shift(); //remove apple
fruits.unshift("apple"); //adds apple

//----------- splice------------ metodi
/**
 *Birinchi parametr (2) yangi elementlar qo'shilishi kerak bo'lgan joyni belgilaydi.

 Ikkinchi parametr (0) qancha elementni olib tashlash kerakligini aniqlaydi.

Qolgan parametrlar ("Limon", "Kivi") qo'shiladigan yangi elementlarni belgilaydi.

Splice () usuli o'chirilgan elementlar bilan qatorni qaytaradi:
 * 
 */
fruits.splice(2, 0, "carrot", "cabbage");

console.log(
  "saralangan massiv : " + fruits,
  "    ",
  "Elementla soni :" + fruits.length
);

const boys = ["Bill", "Gate", "Mark"];
const girls = ["Adel", "Alice", "Melina"];

let com = [...boys, ...girls];
console.log(com);
// Slice metod
const newBoys = boys.slice(0, 1);
console.log(newBoys);
console.log(boys);
// concat metodi
const childer = boys.concat(girls);
console.log(childer);

const point = [100, 1, 2, 123, 55, 22, 32, 98, 67];

// sort  ----------------- max -> min sort----------------------------
// point.sort(function (a, b) {
//   return b - a;
// });
// ------------------ min -> max  Sort-----------------------------
// point.sort(function (a, b) {
//   return a - b;
// });

//------------------------Random Sort-----------------
point.sort(function (a, b) {
  return 0.5 - Math.random();
});
console.log(point);

//------------------- max element in array -------------------
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
} 
let max = myArrayMax(point);
console.log("Eng katta element :" + max);
// ---------------------------MAX element topish oson yo'li ------------------
let max2 = point.reduce((a, b) => (a > b ? a : b));
console.log("Max-elem  => " + max2);

// ----------------------Minimal element in array----------------------
function myArrayMin(arr2) {
  let len = arr2.length;
  let min = Infinity;
  while (len--) {
    if (arr2[len] < min) {
      min = arr2[len];
    }
  }
  return min;
}
let min = myArrayMin(point);
console.log("Minimal element: " + min);

// ---------------------------Array iteration-------------------------
const iteration = [10, 20, 30];
// ES6
iteration.forEach((element) => console.log("forEach yordamida - " + element));

// -----------------------------For of---------------------------------

for (const iter of iteration) {
  console.log("For ... of  yordamida : " + iter);
}

//EVERY()  tekshirish . true false qaytadi  1 donasi -2 bolsa false qayadi -2 gacha tekwiradi wo'da toxdidi
const numbers3 = [2, 5, 21, 11, -43, 41, 0, 76];

let every = numbers3.every((num) => {
  return num >= 0;
});

console.log(every);

const numbers4 = [2, 5, 21, -11, 43, 41, 0, 76];

let some = numbers4.some((num) => {
  return num >= 0;
});

console.log(some);

//FILTER()

const numbers5 = [2, -25, 21, -11, 43, 41, 0, -76];

let filter = numbers5.filter((filter) => {
  return filter >= 0;
});
console.log("filter metodi - ", filter);
let filter2 = numbers5.filter((filter) => {
  return filter <= 0;
});
console.log("filter metodi - ", filter2);

//MAP() metodi
console.log("MAP Metodi");

let map = filter.map((li) => "<li>" + li + "</li>");
let html = "<ul>" + map.join("") + "</ul>";
let map2 = filter.map((num) => {
  return { value: num };
});

console.log(map);
console.log(html);
console.log(map2);

// qisqa yozish
let newThief = numbers5
  .filter((fil) => fil >= 0)
  .map((map) => {
    return { value: map };
  })
  .filter((num) => num.value > 20);
console.log(newThief);
