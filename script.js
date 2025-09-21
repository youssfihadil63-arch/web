console.log("hello loulou");
let favoriteNumber = 3;
favoriteNumber = 7;
console.log(favoriteNumber);
let b = 3.4;
console.log(b);
let a = 10;
console.log(a);
console.log(typeof a);
console.log(typeof b); // il zouz number ye3ni java script il kol ichofhom number
console.log(a - b);
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a % b);//fema tertib fi awlawiyt al 3maliyt al 7issabiya 
console.log(2.2 + 3.4); // fama mochkl fi il ar9m il 3chriya 
let title = "hello\"";
console.log(title);
console.log(typeof title);
let js = 'javascript';
let k = title + js;
console.log(js + " " + title);
console.log(k);
let raining = false;
let sunny = false
let cloudy = true;
console.log(typeof raining);
// AND &&
// OR ||
// NOT !
console.log(sunny && cloudy)
console.log(sunny && cloudy || raining) // and toujour 3indha awlawiya 3la or 
// Al SENDOUG AL FER4 
let x // undefined
let w = null // null 
let clouudy = undefined;
console.log(typeof w) // object
console.log(typeof x) // undefined
console.log(typeof cloudy) // undefined
let c = 1
let d = 2
console.log(c = d) // 2
console.log(c) // 2
console.log(d) // 2
console.log(c += d) // a=a+b => 2+2=4
console.log(c) // 4 
console.log(c == d) // false
console.log(c != d) // true 
console.log(c > d) // true
console.log(c < d) // false
console.log(c >= d) // true
console.log(c <= d) // false
console.log(c === d) // false 
console.log(c !== d) // true 
let A = "a"
let B = "b"
console.log(A > B) // false
console.log(A < B) // true 
console.log(A == B) // false  
console.log(A != B) // true
console.log(A >= B) // false
console.log(A <= B) // true 
console.log(A === B) // false 
console.log(A !== B) // true

let m = true
let n = false
console.log(m == n); // false
console.log(m != n);// true
console.log(m > n);// true

let l = null  //object 
let ki = undefined  // undefined
console.log(l == ki); // true
console.log(l === ki);// false 
console.log(l != ki);// false 
console.log(l !== ki);// true   
console.log(l > ki);// false
console.log(l < ki);// false 
console.log(l >= ki);// false 
console.log(l <= ki);// false

let cloud = true
let rainin = false
console.log(!cloud);// false
console.log(rainin);// false 
function printName() {
    console.log("hello loulou");
}
printName();

printName();

printName();
function printName(name) {
    console.log("hello " + name);
}


function sumi(a, b) {
    return a + b;
}
sumi(3, 4); // mefama 7ta affichage juste affectation akahw
console.log(sumi(3, 4)); //affectation et  affichage 

// function expression
let sum = function (a, b) {
    return a + b;
}
// function 
function sumi(a, b) {
    return a + b;
}
// Arrow function
let suma = (a, b) => {
    return a + b;
}
console.log(sumi(3, 4)); //affectation et  affichage


function printText(text) {
    console.log(text);
}
printText("hello");
printText(3);
printText(true);

let prinTextArrow = text => console.log(text);
console.log(prinTextArrow); // affichili function nefsha "console.log (text);"
console.log(typeof prinTextArrow); // affichili type function
console.log(prinTextArrow("hello arrow function"));


//hoisting 
console.log(sumi(3, 4)); //affectation et  affichage
function sumi(a, b) {
    return a + b;
}
//function dima tete9ra fi loul 7ta lew knt fi a5r page web 3la 3kss Arrow function lzm tet7t mel loul 9bel "console.log(prinTextArrow("hello arrow function"));
// Arrow function

console.log(sumi(3, 4)); //affectation et  affichage
let sumo = (a, b) => {
    return a + b;
}  // haka mouch bech e5dem 5ater arrow function ma3andhash hoisting w zeda kif ybda 3indi let meysrch 3indi arrow fonction

//scroping   al tar aw al mejal " {}  : curly braces ou function par curly braces "
function printFirstName(name) {
    // local variable
    let result = "my name is" + name;
    console.log(result);
}

function test() {
    console.log(result);
}
// Global variable
let result = "abdullah"
printFirstName(result)
test()

let F = 10;
{
    console.log(F);
    {
        let g = 2;
        console.log(g);
    }

}


// closure " function dakhel function "

// Global scope
let gym = "c&n acess gym";

function apartment() {
    // local scope
    let kitchen = 1;
    let bedroom = 1;
    console.log(gym, kitchen);
    function room() {
        let light = 1;
        kitchen++;
        console.log(light, kitchen);
    }
    return room;


}
let firstRoom = apartment();
console.dir
firstRoom();
firstRoom();



function apartment2() {
    // local scope
    let kitchen = 1;
    let bedroom = 1;
    console.log(gym, kitchen, bedroom);
}

apartment();
apartment2();
let secondRoom = apartment();
console.dir(secondRoom);
secondRoom();
secondRoom();

onclick

// 5  5.5  number 
// string""
// boolean true false
// undefined 
// null 
// object 
// symbol



//const  9ima ma tnajmch tetbadel
const pi = 3.14;
let radius = 5; // 9ima 9abila ll te4yr
radius = 7;

const area = true  // 9ima 4yr 9bla ll te4yr 
a = false; // error
console.log(pi);
console.log(radius);
console.log(area);

// mimori optimisation  entre const et let 
//  let : changement de mémori adresse  fi kol mera nebdl il 9ima
// l'adresse mémoire ne change rien  aprés modification ou affictation 
// hatha ynteb9 3la mote4ayrat al awaliya " number , string , boolean"  5ater menjmch nebdl 9imetha nejm ,ebdl kn 3inwanh


// var : mete7termch {}
{
    var h = 5;
    console.log(h);
}
console.log(h);
// hoisting
printAhw();
function printAhw() {
    console.log("ahw");
}
printAhw();
// toujours 9imat var 
var p = undefined;
{
    var v = 10;
    var v = 20;
}
console.log(v);
// var meyest3mlouch 5ater fama mouchkl fi scope w hoisting 
// let w const 5ater fama scope w ma fama hoisting

// te7wil new3 il mote4erat 
const s = "5";
const t = "3";
console.log(s + t); // 53    type coercion : te7wil  al mote4erat  ( string + string = string ): te7wil themni ijberi  w fi il 7ala hathi 3indi deux  façon "string + string = string " w " number + number = number "
console.log(Number(s) + Number(t)); // 8   type casting : te7wil al mote4erat ( string to number )
console.log(s - t); // 2        
console.log(s * t); // 15
console.log(s / t); // 1.6666666666666667
console.log(s % t); // 2
console.log(typeof s); // string
console.log(typeof t); //  string

// string to number 
// parseInt 4  
//parseFloat 4.2

// Explicit      " te7wil sari7 " type coercion
console.log(parseInt(s) - parseInt(t)); // 2  
console.log(parseFloat(s) - parseFloat(t)); // 2
console.log(parseInt(s) + parseInt(t));

const q = true;
console.log(typeof (q + 1));   // number "2"
const r = false;
console.log(typeof (r + 1));   // number "1"
//ch ne3ml 3amliyt 7isabiya lzm tekoun nefss "type"


const u = 1;  // number to string 
const i = "2";
console.log(u + i); // 12
console.log(typeof (u + i)); // string


// == t3meli te7wil tel9ai   "can undifiend w null ykounou m3a ba3dhom = true w nest3ml me3hom == kn hathi   "" indifiend ==indifind  w null == null = true w indifiend == null = true "
// === ma t3melch te7wil tel9ai
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null == null);
const j = true;
const à = 1;
// console.log(j === à);  // false
console.log(j == à);  // true  hathi menst3melch 


// Array 
const fruits = ["apple", "banana", "orange"];
console.log(fruits);
fruits[0] = "grape";
console.log(fruits[1]);
console.log(typeof fruits);
fruits.push("kiwi");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("mango");
console.log(fruits);

// variables
const firstName = "john";
const id = 12345;
const adress = " Cairo Egypt"
const hobbies = ["football", "swimming", "reading"];
console.log(typeof hobbies);
// objects in javascript 
// { key : value }
// let | const
const person = {
    firstName: "john",
    id: 12345,
    address: {
        city: "Cairo",
        country: "Egypt"
    },
    hobbies: ["football", "swimming", "reading"],
    sayhi: function () {
        console.log("hello");
    }
};
person.sayhi();
console.log(person.address.city);
console.log(person);
console.log(person.firstName);
console.log(person.hobbies[1]);
console.log(console); // object
person.firstName = "doe";
console.log(person);

// template string
const FirstName = "hadil";
const website = "hadil.com";
console.log("my name is " + FirstName + " and my website is " + website);
// template string
console.log(`my name is ${FirstName} and my website is ${website}`);
