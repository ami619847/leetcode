/**
 * Definition for singly-linked list.
 *  */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// complexety of time O(n), space O(1)

function middleNode(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    // fast moves 2 steps at a time, slow - 1
    let fast: ListNode | null = head, slow: ListNode | null = head;

    //when fast will be at the end, low = middle node
    while (fast && fast.next) {
        slow = slow!.next;
        // console.log('slow=', slow)
        fast = fast.next.next;
        // console.log('fast=', fast)
    }

    return slow;
};