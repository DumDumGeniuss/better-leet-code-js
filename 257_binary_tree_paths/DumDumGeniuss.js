/**
 * Definition for a binary tree node.
 **/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var paths = [];
    if(!root) {
        return paths;
    }
    writePath("", root, paths);
    return paths;
};

var writePath = function(pathString, node, paths) {
    pathString += node.val + "->";
    if(node.left === null && node.right === null) {
        paths.push(pathString.substring(0, pathString.length-2));
    }
    if(node.left) {
        writePath(pathString, node.left, paths);
    }
    if(node.right) {
        writePath(pathString, node.right, paths);
    }
};


var root = new TreeNode(5),
    tempRoot;

root.left = new TreeNode(3);
root.right = new TreeNode(8);

console.log(binaryTreePaths(root));

tempRoot = root.left;
tempRoot.right = new TreeNode(4);

console.log(binaryTreePaths(root));

tempRoot = root.right;
tempRoot.right = new TreeNode(11);
tempRoot.left = new TreeNode(6);

console.log(binaryTreePaths(root));
