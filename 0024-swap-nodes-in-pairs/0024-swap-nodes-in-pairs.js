/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) {
        // If the list has zero or one node, no swapping is needed.
        return head;
    }
    const dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    while (current.next && current.next.next) {
        const firstNode = current.next;
        const secondNode = current.next.next;

        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        current.next = secondNode;

        current = current.next.next;
    }

    return dummy.next;
};
