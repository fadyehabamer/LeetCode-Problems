// array destructuring
let names = ["أحمد", "سارة"];
let x1 = names[0];
let y1 = names[1];

let [x2, y2] = ["أحمد", "سارة"];

console.log(x2); // أحمد
console.log(y2); // سارة

// object destructuring
let person = {
  name: "أحمد",
  age: 30,
};
let name1 = person.name;
let age1 = person.age;

let { name: name2, age: age2 } = person;

console.log(name2); // أحمد
console.log(age2); // 30    

[a, b] = [b, a]; // سحر! we can swap values without a temporary variable