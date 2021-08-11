/*   --------------English----------------
    There are 3 ways to declare a JavaScript variable:
    
    Using var x = 5;;
    Using let  y = 'hello';
    Using const  pi = 3.14;
    Using Boolean isMarried = false;
*/

/*   --------------Uzbek----------------
    JavaScript o'zgaruvchisini e'lon qilishning 3 usuli mavjud:

     Var -dan foydalanish
     Let yordamida
     Const yordamida

*/

var x = 5;
var fname = "Nabijon";

/**
 * console.log(x + y); qo'shish
 * console.log(x - y); ayirish
 * console.log(x * y); ko'paytirish
 * console.log(x / y); bo'luv
 * console.log(x % y); bo'lgandagi qoldiq
 * console.log(++x); x = x + 1 ;
 * console.log(--x); x = x - 1;
 *
 * underfined
 * null
 * 0
 * false
 * NaN
 * ''
 * ||  (or) yoki
 * &&  (and)  or va
 */

// console.log(x, fname);

// ---------------------------------------------------------
// ---------------------   Var vs Let-----------------------
// ---------------------------------------------------------

//  firstly var

// global var
var y = "Hi I'm Global Var";

function Variable() {
  //global var calling
  console.log(y); // return =>  undefined

  //   local var
  var y = "Hi  I'm Local var ";
  console.log(y); // return =>  Hi  I'm Local var
}
Variable();

// secondly Let
// global let
let l = "Hi I'm Global Let";

function Let() {
  //global let calling
  console.log(l); // return =>  Hi I'm Global Let
}
Let();

// --------------------------------Const-----------------------------

const pi = 3.14;
//pi = 2.14;   const bn elon qilinganda qiymatni ozgartrib bolmaydi
console.log(pi);

//---------------CamelCase----------------
/*
  Ingliz tilidan tarjima qilingan-Tuya ishi - so'zlarni bitta katta harf bilan ajratilishini va har bir harfdan boshlanadigan birinchi so'zni ko'rsatuvchi bo'sh joy va tinish belgilarisiz iboralar yozish amaliyoti. Umumiy misollar "iPhone" va "eBay" ni o'z ichiga oladi.
 */

let firstName = "Ismingiz";
let dateofBith = "12/21/1999";
let accountNumber = 123456;

