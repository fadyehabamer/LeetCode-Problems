// LIFO (Last In, First Out)
// خر واحد يدخل، هو أول واحد يخرج

// Push: إضافة عنصر جديد "فوق" الـ Stack.

// Pop: مسح آخر عنصر اتحط (اللي على الوش) وترجيعه ليك.

// Peek (أو Top): بتبص بصه على العنصر اللي فوق من غير ما تمسحه.

// isEmpty: بتتأكد الـ Stack فيه بيانات ولا فاضي.

let stack = [];

// 1. Push - بنضيف عناصر
stack.push("طبق 1");
stack.push("طبق 2");
stack.push("طبق 3");
// [ 'طبق 1', 'طبق 2', 'طبق 3' ]
console.log(stack);

stack.pop(); // -> removed طبق 3

console.log(stack);

function peek(stack) {
  console.log(stack[0]);
}
peek(stack);

function isEmpty(stack) {
  if (stack.length > 0) {
    return false;
  }
  return true;
}

console.log(isEmpty(stack));
