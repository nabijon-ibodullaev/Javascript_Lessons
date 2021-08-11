// ---------------------If else   else if--------------------
/**
 *  if(shart) {
 *     statement 1
 *     statement 2
 *     }
 *
 *   else if(boshqa shart) {
 *     statement 1
 *     statement 2
 *    }
 *
 *    else if(yana boshqa shart) {
 *     statement 1
 *     statement 2
 *    }
 *
 *    else
 */
// Real time only hour
var d = new Date();
var n = d.getHours();
console.log("Hour is :" + n);

function dailyRules(hour) {
  if (hour >= 5 && hour < 7) {
    console.log("Wake up and Have Breakfast !!! ");
  } else if (hour >= 7 && hour < 13) {
    console.log("Go to School and After that  Have Lunch ");
  } else if (hour >= 13 && hour < 17) {
    console.log(" Have Rest and then play with your friend or watch TV");
  } else if (hour >= 17 && hour < 19) {
    console.log("Help to your mother for houseworks and have dinner");
  } else if (hour >= 19 && hour < 22) {
    console.log("Prepare your homework and read book ");
  } else {
    console.log("Go to sleep");
  }
}

console.log(dailyRules(n)); //  Working   But  return underfined too   ? Why ?.  Do you know it ?

// ---------------------------------Switch case--------------------------------

let word = "intelligent";

switch (word) {
  case "name":
    console.log("Nabijon");
    break;
  case "surname":
    console.log("Ibodullayev");
    break;
  case "age":
    console.log("21");
    break;
  //------------case bir necha case dan iborat bolishi mumkin----------------
  case "clever":
  case "intelligent":
  case "smart":
    console.log("Aqlli");
    break;
  default:
    console.log("Hech qanday so'z yo'q");
    break;
}

//  ===   teng yozilsa qatiy tenglikdir qiymatini ham turi tekwiriladi
if (word === "name") console.log("Nabijon");
else if (word === "surname") console.log("Ibodullayev");
else if (word === "clever" || word === "smart" || word === "intelligent")
  console.log("Aqlli dono if else yordamida or  bilan yozildim");
else console.log("Hech qanday so'z yoq men if else yordamida yozilganman' ");
