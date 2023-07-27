/*
Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
*/

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeElements = function (head, val) {
  // Base case: If head is null, return null
  if (head === null) {
    return null;
  }

  // Check if the current node needs to be removed
  if (head.val === val) {
    // Skip the current node by making the recursive call with the next node
    return removeElements(head.next, val);
  }

  // Recursive call to remove elements from the remaining sublist
  head.next = removeElements(head.next, val);

  return head; // Keep the current node in the modified list
};

// Helper function to create a linked list from an array
const createLinkedListFromArray = function (arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
};

// Helper function to convert a linked list to an array
const convertLinkedListToArray = function (head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};

const arr = [1, 2, 6, 3, 4, 5, 6];
const val = 6;

const head = createLinkedListFromArray(arr);
const remove = removeElements(head, val);
const resultArray = convertLinkedListToArray(remove);
console.log(resultArray);
