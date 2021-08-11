//-------------------Factory funcktion---------------------

// xar qanday object ni constructor xoxsasi bor
console.log("FACTORY FUNCTION");

// shu bizga funcksiya yasab beradi xoxlaganimizcha aylana yasashimiz mumkin
// const x = {} qilsak js x = new Object()  qilib yasab oladi
function createCircle(radius, x, y, isVisible) {
  // const circle =
  return {
    radius: radius,
    location: {
      x: x,
      y: y,
    },
    isVisible: isVisible,
    draw() {
      return " I am Circle";
    },
  };
  // return circle;
}
let circle2 = createCircle(2, 1, 1, true);
console.table(circle2);
console.log(circle2);

let circle3 = createCircle(3, 2, 2, false);
console.table(circle3);
console.log(circle3);

//----------------------------Constructor Funcksiya------------------------
// String() constructor
// Boolean() constructor
// Number() constructor
console.log("CONSTRUCTOR");
function Circle(radius, x, y, isVisible) {
  this.radius = radius;
  location: {
    this.x = x;
    this.y = y;
  }
  this.isVisible = isVisible;
  this.draw = function () {
    console.log("Constructor func draw");
  };
}

const circleConst = new Circle(5, 4, 4, true);
console.log(circleConst);

//call({} , parametrlar yoziladi)
Circle.call({}, 10, 6, 6, false);
console.log(Circle);

//apply({} , [parametrlar yoziladi])

Circle.apply({}, [10, 9, 9, true]);
//  --------------contructor yana br funcksiya tuzuwga yor.beradi--------------
