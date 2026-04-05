// convert list to nodes // structure 
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
// 2. نحول الـ Array لـ Linked List 
let l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    console.log(dummy); // 
    console.log(list1); //

    
    // التعديل الجوهري: نستخدم while بدل if
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1; // 
            list1 = list1.next;
        } else {
            // هنا مش محتاجين if تانية، الـ else كفاية
            current.next = list2;
            list2 = list2.next;
        }
        // لازم نحرك الـ current خطوة بعد كل عملية توصيل
        current = current.next;
    }

    // هنا بنوصل البواقي (لو قائمة أطول من التانية)
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};

mergeTwoLists(l1, l2)