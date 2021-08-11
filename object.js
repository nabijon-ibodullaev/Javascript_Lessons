// ----------------------------Objects----------------------
console.log("OBJECTS");

const person = {
  personName: "Nabijon",
  age: 21,
  email: "ibodullayevnabijon5@gmail.com",
};
// object  qiymatlarini ozgarirish
person.personName = "Ilon Mask";
person.age = 25;
person.email = "Ilon@gmail.com";
// ES5
// to'rtburchak qavslar yordamida ozgartirish
person["age"] = 26;

console.log(
  "name :" + " " + person.personName,
  "age: " + " " + person.age,
  "Men Tortburchak qavsman " + " " + person["age"],
  "email : " + " " + person.email
);
//ES6
console.log(
  `name: ${person.personName} , age : ${person.age} , email : ${person.email} `
);

//  ----------------------------OBJECT xossalari------------------------------//

const cars = [
  { type: "Tesla", year: 2016 },
  { type: "Ferrari", year: 2001 },
  { type: "BMW", year: 2010 },
];
// --------------------Object ni yil  boyicha saralash -----------------
cars.sort(function (a, b) {
  return a.year - b.year;
});
//----------------------- objectdagi Harfla boyicha saralash-------------------
// cars.sort(function (a, b) {
//   let x = a.type.toLowerCase();
//   let y = b.type.toLowerCase();
//   if (x < y) {
//     return -1;
//   }
//   if (x > y) {
//     return 1;
//   }
//   return 0;
// });
console.table(cars);

// ---------------------object xossalari boylab yurib chiqish--------------------

const circle = {
  radius: 1,

  draw() {
    console.log("Ciricle");
  },
};

// OBJECTDAN Clone Olish yani nusxa ;
console.log("CLONE OLISH");

const clone = {};
for (let key in circle) {
  clone[key] = circle[key];
}

console.log(clone);
//ikkinchi turi Clone olishning
//assign( {color : 'red'} , circle ) desak circle hamma hossassi
/**  {
 *  color: red;
 * circle xossalar ham bunga qowiladi
 * }
 *
 * */
console.log("ikkinchi usul : ");
const clone2 = Object.assign({}, circle);
console.log(clone2);
//uchinch turi Clone olishning
//assign( {color : 'red'} , circle ) desak circle hamma hossassi
/**  {
 *  color: red;
 * circle xossalar ham bunga qowiladi
 * }
 *
 * */
console.log("uchinch spred operatori yani ... dir  usul : ");
const clone3 = { ...circle };
console.log(clone3);





