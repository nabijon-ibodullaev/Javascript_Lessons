// Getter and Setter
// getter object xossasini o'qib olish un
//setter object xossasiga qiymat berish uchun ishlatiladi
let person = {
  fname: "Nabijon",
  Sname: "Ibodullayev",
  fullname() {
    return this.fname + " " + this.Sname;
  },
};
console.log(person.fullname());
// ---------------------------------GETTER----------------------------

let person2 = {
  fname: "Nabijon",
  Sname: "Ibodullayev",
  get fullname() {
    return this.fname + " " + this.Sname;
  },
};
console.log(person2.fullname); // metod emas full name shu un () larsiz yoziladi
// ---------------------------------SETTER----------------------------

let person3 = {
  fname: "Nabijon",
  Sname: "Ibodullayev",
  get fullname() {
    return this.fname + " " + this.Sname;
  },
  set fullname(name) {
    let fullnameArray = name.split(" ");
    this.fname = fullnameArray[0];
    this.Sname = fullnameArray[1];
  },
};

person3.fullname = "Ilon Mask";
console.log(person3, person3.fullname); // metod emas full name shu un () larsiz yoziladi
