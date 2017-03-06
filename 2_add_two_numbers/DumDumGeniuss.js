
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	const l3 = new ListNode(0);
	if (l1 || l2) {
		doAdd (l1, l2, l3, 0);
		return l3;
	} else {
		return null;
	}
};

function doAdd(l1, l2 ,l3, index) {
	let val1 = l1 ? l1.val : 0;
	let val2 = l2 ? l2.val : 0;
	let newIndex = val1 + val2 + index >= 10 ? 1 : 0;
	l3.val = (val1 + val2 + index) % 10;
	l1 = l1 ? l1.next : l1;
	l2 = l2 ? l2.next : l2;
	if (l1 || l2 || newIndex) {
		l3.next = new ListNode(0);
		l3 = l3.next;
		doAdd(l1, l2, l3, newIndex);
	} else {
		return;
	}
}

const node_1 = new ListNode(2);
node_1.next = new ListNode(4);
node_1.next.next = new ListNode(3);

const node_2 = new ListNode(5);
node_2.next = new ListNode(6);
node_2.next.next = new ListNode(4);

const node_3 = addTwoNumbers(node_1, node_2);

console.log(node_3.val === 7);
console.log(node_3.next.val === 0);
console.log(node_3.next.next.val === 8);