for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// teskari
for (let i = 5; i >= 1; i--) {
  console.log(i + " " + "teskari sanash");
}

for (let i = 1; i <= 100; i *= 3) {
  console.log(i + " " + " 3 ga kopayb boradi");
}

// ------------------------------While -------------------------

console.log("WHILE  operation");
let i = 1;
while (i <= 3) {
  console.log(i);
  i++;
}

//--------------------------------Do While-----------------------------

// do while da code kamida 1 marta ishga tushadi

console.log("DO WHILE OPERATION");
let j = 1;
do {
  console.log(j);
  //agar j++ bolmasa u doimiy ishlab turuvchi kodga aylanadi
  j++;
} while (j <= 3);

const SPEED_LIMIT = 70;
const KM_PER_POINT = 5;

checkspeed(150);

function checkspeed(speed) {
  if (speed < 70 + KM_PER_POINT) {
    console.log("Well");
    return;
  } else {
    const point = Math.floor((speed - SPEED_LIMIT) / 5);
    if (point >= 12) {
      console.log("Shtrafff");
    } else console.log(point);
  }
}
