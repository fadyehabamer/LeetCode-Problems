// linked list is a data structure consits of
// nodes where each node has a value and a pointer to the next node
// linked list is a linear data structure where each element is a separate object 
// not like an array where elements are stored in contiguous memory locations

// first node is called head and the last node is called tail 
// tail's next pointer is null 

// Singly Linked List: كل Node بتشاور على اللي بعدها بس (زي اللي شرحناها).
// Doubly Linked List: كل Node بتشاور على اللي بعدها واللي قبلها كمان (تقدر تمشي قدام وورا).
// Circular Linked List: آخر Node بتشاور على أول Node (دايرة مقفولة)

// شكل الـ Node الواحدة
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let head = new Node(10);
head.next = new Node(20);

// شكل الـ Linked List
// head -> 10 -> 20 -> null

// Linked List operations
// 1. Insertion: adding a new node to the linked list
// 2. Deletion: removing a node from the linked list
// 3. Traversal: visiting each node in the linked list
// 4. Searching: finding a node with a specific value in the linked list

// Insertion at the end of the linked list
function insertAtEnd(head, val) {
  let newNode = new Node(val);
  if (!head) {
    return newNode;
  }
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}

// Deletion of a node with a specific value
function deleteNode(head, val) {
  if (!head) {
    return null;
    }
    if (head.val === val) {
    return head.next;
    }
    let current = head;
    while (current.next) {
    if (current.next.val === val) {
    current.next = current.next.next;
    return head;
    }
    current = current.next;
    }
    return head;
}

// Traversal of the linked list
function traverse(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

// Searching for a node with a specific value
function search(head, val) {
  let current = head;
  while (current) {
    if (current.val === val) {
      return true;
    }
    current = current.next;
  }
  return false;
}

// Example usage
let head = new Node(10);
head = insertAtEnd(head, 20);
head = insertAtEnd(head, 30);
traverse(head); // Output: 10, 20, 30
console.log(search(head, 20)); // Output: true
head = deleteNode(head, 20);
traverse(head); // Output: 10, 30
console.log(search(head, 20)); // Output: false
