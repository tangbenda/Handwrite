/*
 @author: tang
 @title: leetcode21 合并两个有序链表 https://leetcode-cn.com/problems/merge-two-sorted-lists/
 @date: 2020/12/6
 */

// 迭代法
var mergeTwoLists = function(l1, l2) {
  // newList和curr看作两个指针，prehead用来访问合并后的头结点，curr跟随l1, l2移动到尾部
  let prehead = new ListNode();
  let curr = prehead
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  curr.next = l1 === null ? l2 : l1;

  return prehead;
};


// 递归法
var mergeTwoLists = function (L1, L2) {
  if (L1 === null) {
    return L2;
  }
  if (L2 === null) {
    return L1;
  }
  if (L1.val < L2.val) {
    L1.next = mergeTwoLists(L1.next, L2);
    return L1;
  } else {
    L2.next = mergeTwoLists(L1, L2.next);
    return L2;
  }
};

