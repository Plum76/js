/*1-е задание*/

let x1 = 3;
let y1 = 5;
let x2 = 4;
let y2 = 6;
let height = y2 - y1;
let width = x2 - x1;
let square = heig * width;
Math.abs(square);
console.log('площадь прямоугольника', Math.abs(square));


/*2-е задание*/

let a = 17.654015;
let b = 19.347340;
let precision = 5;

let aNormalized = Math.round(a*Math.pow(10, precision));
let bNormalized = Mayh.round(b*Math.pow(10, precision));
console.log(aNormalized);
console.log(bNormalized);
console.log('Число а больше числа в', aNormalized > bNormalized);
console.log('Число а меньше числа в', aNormalized < bNormalized);
console.log('Число а больше либо равно числу в', aNormalized >= bNormalized);
console.log('Число а меньше либо равно числу в', aNormalized <= bNormalized);
console.log('Число а равно числу в', aNormalized === bNormalized);
console.log('Число а не равно  числу в', aNormalized !== bNormalized);


/*3-е задание*/

let n = -1000;
let m = 1000;
let range = Math.abs(m - n);
let numberInRange = Math.round(Math.random() * range);
let min = Math.min(n, m);
let c = min + numberInRange;
let d = min + numberInRange;
console.log('Число с больше числа d', c > d);
console.log('Число с меньше числа d', c < d);
console.log('Число с больше либо равно числу d', c >= d);
console.log('Число с меньше либо равно числу d', c<= d);
console.log('Число с равно числу d', c === d);
console.log('Число с не равно числу d', c !== d);

