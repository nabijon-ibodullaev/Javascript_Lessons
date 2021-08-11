let numbers = [10, 23, 99, 44, 81, 101];
let index = numbers.indexOf(99);
//find metodi
console.log("FiNd metodi");
let found = numbers.find(function (a) {
  return a > 20;
});
console.log("QIDIRILAYOTGAN RAQAM - " + found);
console.log("INDEX RAQAMI");
console.log(" INDEX raqami -  " + index);
console.log("oxirgi INDEX raqami -  " + numbers.lastIndexOf(99));
//indexof(element , nechanchi indexdan boshlab qidirish)
console.log(" INDEX raqami -  " + numbers.indexOf(44, 4));

//Toplamda bor yoki yo'qligini tekshirish
//includes
console.log("toplamdan Bor yoki yoqliqini tekshirish -" + numbers.includes(44));
//o'sish tartibida
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
//teskari tartibda
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

let courses = [
  {
    id: 1,
    title: "Angular ",
    cost: "200",
  },
  {
    id: 2,
    title: "React ",
    cost: "100",
  },
  {
    id: 3,
    title: "Node JS ",
    cost: "150",
  },
  {
    id: 4,
    title: "Vue Js ",
    cost: "120",
  },
];
// Toplamlarda find() metodi
console.log("TOPLAMLARDA FIND METODI");
let lesson = courses.find(function (b) {
  return b.cost === "120";
});
console.log(" izlayotgan toplam - ", lesson);
let lessonIndex = courses.findIndex(function (c) {
  return c.cost === "120";
});

console.log(" izlayotgan toplam Index raqami - ", lessonIndex);

// ES6
let lessonIndex2 = courses.findIndex((d) => {
  return d.cost === "120";
});
console.log(" izlayotgan toplam Index raqami - ", lessonIndex2);

//---------- saralash----------------
courses.sort(function (x, y) {
  if (x.title < y.title) return -1;
  if (x.title > y.title) return 1;
  else 0;
});
console.log(courses);

// ------------------Id raqamlar boyicha saralash--------------------

courses.sort(function (x, y) {
  return y.id - x.id;
});
console.log(courses);

console.log("KICHIK katta HARFLA ARALASH BO'lsa");
let courses2 = [
  {
    id: 1,
    title: "angular ",
  },
  {
    id: 2,
    title: "React ",
  },
  {
    id: 3,
    title: "node JS ",
  },
  {
    id: 4,
    title: "Vue Js ",
  },
  {
    id: 5,
    title: "aSP.net ",
  },
];
courses2.sort(function (x, y) {
  let aa = x.title.toLowerCase();
  let bb = y.title.toLowerCase();
  if (aa < bb) return -1;
  if (aa > bb) return 1;
  else 0;
});
console.log(courses2);

//-------------------- Toplamlar yig'indisi----------------------

let number = [12, 21, 31, 6, 3, 87];
let sum = 0;
for (let num of number) {
  sum += num;
}
console.log(sum);
console.log("REDUCE METODI");

// ----------------array.reduce( (x , y) => { return x + y } , 0)---------------

let sum2 = number.reduce((f, g) => {
  return f + g;
}, 0);
console.log(sum2);

const books = [
  { title: "1 Clean Code", year: 2008, rating: 8.2 },
  { title: "2 Clean Code", year: 1993, rating: 9.3 },
  { title: "3 Clean Code", year: 1994, rating: 7.1 },
  { title: "4 Clean Code", year: 2014, rating: 8.2 },
  { title: "5 Clean Code", year: 2018, rating: 9.7 },
  { title: "6 Clean Code", year: 1999, rating: 8.4 },
  { title: "7 Clean Code", year: 2009, rating: 7.7 },
  { title: "8 Clean Code", year: 2004, rating: 6.9 },
];
let book = books
  .filter((b) => b.year > 2010 && b.rating > 8)
  .sort((a, c) => {
    if (a.year < c.year) return -1;
    if (a.year > c.year) return 1;
    return 0;
  })
  .map((book) => {
    return book.title;
  });
console.log(book);
