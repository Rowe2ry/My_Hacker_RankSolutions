/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;

    // create dummy entry node and set as previous
    const dummyHead = new ListNode(-1);  
    let prev = dummyHead;

    while (list1 && list2) {
        // if current list1 is greater
        if (list1.val <= list2.val) {
            // add list1 to dummy list
            prev.next = list1;
            // advance list1 position
            list1 = list1.next;
        } else {
            // add list2 to dummy list
            prev.next = list2;
            // advance list2 position
            list2 = list2.next;
        }
        // advance prev position
        prev = prev.next;
    }
    // since one list can still have nodes, add to dummy list
    if (list1) {
        prev.next = list1;
    } else {
        prev.next = list2;
    }
    // ignore dummy list head, return at start of new list
    return dummyHead.next;
};