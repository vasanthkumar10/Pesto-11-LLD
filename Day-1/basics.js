// OOPs -> Object Oriented Programming structure -> Paradigm

// class - a custom datastructure -> rules(flexible)
// objects (instance) - real time entity
// attribute or property -> variables inside a class
// behavior or method -> functions inside a class

// ways to create object
// 1. Object literals
// 2. Factory method
// 3. constructor method

// object literals
// const ninad = {
//   name: "Ninad pesto",
//   age: 10,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// console.log(ninad);
// ninad.display();

// const virat = {
//   name: "Virat Kohli",
//   age: 36,
//   display: function () {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   },
// };

// virat.display();

// Factory method -> object manufacturing
function createPerson(name, age) {
  return {
    name,
    age,
    display: function () {
      console.log(`My name is ${this.name} and my age is ${this.age}`);
    },
  };
}

const viratFactory = createPerson("virat", 36);
// const vasi = createPerson("vasi", 10);
// console.log(viratFactory);
// console.log(vasi);
// virat.display();

// function borrowing
// bind, call, apply

// const virat = {
//   name: "Virat Kohli",
//   age: 36,
// };

// const ninad = {
//   name: "Ninad pesto",
//   age: 10,
// };

// function display(place, country) {
//   console.log(
//     `My name is ${this.name} and my age is ${this.age}. I'm from ${place}, ${country}`
//   );
// }

// call
// display.call(virat, "delhi", "India");
// display.call(ninad, "chennai", "Indonesia");

// apply
// display.apply(virat, ["delhi", "India"]);

// bind
// const displayVirat = display.bind(virat, "delhi", "India");
// displayVirat();

// (function (__dirname, __filename, exports, module, require) {
//   function display() {
//     console.log(this);
//   }

//   display();
// })(__dirname, __filename, exports, module, require);
// IIFE

// function -> parent then this -> global object
// object -> parent then this -> object

// const virat = {
//   name: "Virat Kohli",
//   age: 36,
//   display: function () {
//     function demo() {
//       console.log(this);
//     }
//     demo();
//   },
// };

// virat.display();

// constructor method
// class Person {
//   constructor(name, age) {
//     //   console.log(this);
//     this.name = name;
//     this.age = age;
//   }

//   display() {
//     console.log(`My name is ${this.name} and my age is ${this.age}`);
//   }
// }

// const vasi = new Person("vasi", 10);
// const sam = new Person("sam", 20);
// // console.log(vasi);
// // console.log(sam);
// vasi.display();

// const nums = [1, 2, 3, 4];
// const obj = {
//   name: "vasanth",
// };

// nums.__proto__ = obj;

// console.log(nums.name);
// nums.push(10);

// const nums = [1, 2, 3, 4];
// console.log(Array.isArray(nums));
// nums[10] = "vasanth";
// nums.push(5);
// nums["age"] = 20;
// console.log(nums);

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }

// small and last index
// for (let num of nums) {
//   console.log(num);
// }

// keys -> only data in the memory
// for (let key in nums) {
//   console.log(key, nums[key]);
// }

// console.log(nums[500]);
