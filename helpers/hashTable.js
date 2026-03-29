let myHashtable = new Map();

// إضافة بيانات (اسم الفاكهة وسعرها)
myHashtable.set("apple", 10);
myHashtable.set("banana", 20);
myHashtable.set("orange", 15);


myHashtable.get("apple"); // هيطلع 10
myHashtable.get("banana"); // هيطلع 20
myHashtable.get("orange"); // هيطلع 15

console.log("بعد الإضافة:", myHashtable);

// هل فيه برتقال؟
console.log(myHashtable.has("orange")); // هيطلع true

// سعر الموز كام؟
console.log(myHashtable.get("banana")); // هيطلع 20

// مسح التفاح من الجدول
myHashtable.delete("apple");

console.log("بعد مسح التفاح:", myHashtable.has("apple")); // هيطلع false

//------------------

let fruits = new Map();
fruits.set("apple", 10);
fruits.set("banana", 20);

for (let [key, value] of fruits) {
  console.log(`الفاكهة هي ${key} وسعرها ${value}`);
}

for (let key of fruits.keys()) {
  console.log("اسم الفاكهة المتاحة: " + key);
}

for (let value of fruits.values()) {
  console.log("السعر المكتوب: " + value);
}

fruits.forEach((value, key) => {
  console.log(`${key} سعره ${value}`);
});
