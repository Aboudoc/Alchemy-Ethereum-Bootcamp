class Tree {
  constructor() {
    this.root = null;
  }

  addNode(node) {
    if (!this.root) {
      this.root = node;
      return;
    }

    let ptr = this.root;
    while (true) {
      if (node.data > ptr.data) {
        if (!ptr.right) {
          ptr.right = node;
          break;
        } else {
          ptr = ptr.right;
        }
      }

      if (node.data < ptr.data) {
        if (!ptr.left) {
          ptr.left = node;
          break;
        } else {
          ptr = ptr.left;
        }
      }
    }
  }

  hasNode(number) {
    let ptr = this.root;

    while (number !== ptr.data) {
      if (number < ptr.data) {
        ptr = ptr.left;
        if (!ptr) {
          return false;
        }
      }

      if (number > ptr.data) {
        ptr = ptr.right;
        if (!ptr) {
          return false;
        }
      }
    }
    return true;
  }
}
