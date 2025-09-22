/**
 * Definition for singly-linked list.
*/
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// space complexity: O(1)
// time complexity: O(n)

function reverseList(head: ListNode | null): ListNode | null {
    let curr: ListNode | null = head;
    let prev: ListNode | null = null;

    while (curr !== null) {
        let temp: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
};