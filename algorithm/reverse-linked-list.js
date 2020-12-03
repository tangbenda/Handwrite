/*
 @author: tang
 @title: 反转链表， 思路：将当前节点的指针指向上一个节点，然后更新当前节点和下一个节点的值即顺移
 https://leetcode-cn.com/problems/reverse-linked-list/
 @date: 2020/12/3
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 迭代法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList1 = function (head) {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
// 尾递归
var reverseList2 = function (head) {
  let reverse = (prev, curr) => {
    if (!curr) return prev;
    let next = curr.next;
    curr.next = prev;
    return reverse(curr, next);
  }
  return reverse(null, head);
};
// 递归
var reverseList3 = function(head) {
  // 如果测试用例只有一个节点 或者 递归到了尾节点，返回当前节点
  if(!head || !head.next) return head;
  // 存储当前节点的下一个节点
  let next = head.next;
  let reverseHead = reverseList3(next);
  // 断开 head
  head.next = null;
  // 反转，后一个节点连接当前节点
  next.next = head;
  return reverseHead;
};