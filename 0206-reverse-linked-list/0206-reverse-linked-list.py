class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head or not head.next:
            return head
        
        reversed_head = self.reverseList(head.next)
        
        head.next.next = head
        head.next = None
        
        return reversed_head
