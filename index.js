// question 1

string = "123";
console.log(Number(string) + 7);

// question 2


let x=8

if (Boolean(x)==false) {
    console.log("invalid");
    
    
} else {
    console.log("valid");
    
}
// question  3

function printOddNumbers() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
}

printOddNumbers();


// question  4

const arr = [1,2,3,4,5]
const evenNums=arr.filter((num)=> num%2==0 )
console.log(evenNums);

// question  5


const fList=[1,2,3];
const sList=[4,5,6];
const merged =fList.concat(sList);
console.log(merged);


// question  6


let day= 5;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Teusday");
        break;
    case 4:
        console.log("Wednsday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;


    default:
        console.log("err");
        
        break;
}

// question  7


const alpha=["a","ab","abc"]
const length=alpha.map((char)=>char.length)
console.log(length);

// question  8 
    

function Division (num) {
    if (num%3==0&& num%5==0) {
        console.log('Divisible by both');
        
    }
    else{console.log("not Divivsible");
    }

}
Division(2);

// question  9


const Squre = num=>{

console.log(num*num);

}

Squre(12)

// question  10
function getPersonInfo(person) {
    const { name, age } = person;

    return `${name} is ${age} years old`;
}

const person = {
    name: "Ziad",
    age: 22
};

console.log(getPersonInfo(person));


// question  11



function sum (x,y,z) {
    return x+y+z
    
}
let result =sum(1,9,3)
console.log(result);


// question  12
function successPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

successPromise().then((message) => {
    console.log(message);
});

// question  13

function max (arr) {
return Math.max(...arr)
    
}
res=max([1,2,3,4,5,6,7])
console.log(res);


// question  14

function getKeys(obj) {
    return Object.keys(obj);
}

const person = {
    name: "Ziad",
    age: 22
};

console.log(getKeys(person));



// question  15
function splitWords(str) {
    return str.split(" ");
}

console.log(splitWords("you need to be better "));



// // Essay questions 


// 1. What is the difference between forEach and for...of? When would you use each?

// forEach:
// A method that loops through every item in an array.

// for...of:
// A loop that goes through each item in an array or string.

// Difference:
// forEach works only with arrays.
// for...of works with arrays and strings, and supports break and continue.

// --------------------------------------------------

// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)?

// Hoisting:
// Hoisting is moving declarations to the top before execution.

// TDZ:
// TDZ is the period before a let or const variable is declared. During this time, it cannot be accessed.

// --------------------------------------------------

// 3. What are the main differences between == and ===?

// == :
// Compares values after type conversion.

// === :
// Compares values and data types without type conversion.

// --------------------------------------------------

// 4. Explain how try-catch works and why it is important in async operations.

// try-catch:
// try-catch is used to handle errors without stopping the program.
// It is important in async operations because it catches errors from async code like fetch() or await.

// --------------------------------------------------

// 5. What's the difference between type conversion and coercion?

// Type Conversion:
// Changing a data type manually.

// Type Coercion:
// JavaScript changes the data type automatically.