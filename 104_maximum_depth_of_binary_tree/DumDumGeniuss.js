//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	var leftDepth,
	    rightDepth;

    if(!root) {
    	return 0;
    }

    leftDepth = maxDepth(root.left)+1;
    rightDepth = maxDepth(root.right)+1;

    return rightDepth>=leftDepth?rightDepth:leftDepth;

};

treenode = new TreeNode(0);
parentNode = treenode;

treenode.left = new TreeNode(1);
treenode.right = new TreeNode(2);

console.log(maxDepth(parentNode)===2);

treenode = treenode.left;
treenode.left = new TreeNode(3);

console.log(maxDepth(parentNode)===3);