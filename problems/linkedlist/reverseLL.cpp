ListNode* reverseList(ListNode* head) {
    ListNode *cur = head, *prev = nullptr;
    while (cur != nullptr) {
        swap(cur->next, prev);
        swap(prev, cur);
    }
    return prev;
}