function linkedList(node) {
  return {
    head: null,
    length: 0,
    //add new node containing value to the end of the list
    append(value) {
      const newNode = node(value);
      if (!this.head) {
        this.head = newNode;
        this.length++;
        return;
      }
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.length++;
    },

    prepend(value) {},
    size() {},
    head() {},
    tail() {},
    at(index) {},
    pop() {},
    contains(value) {},
    find(value) {},
    insertAt(value, index) {},
    removeAt() {},
    toString() {},
  };
}

function node(value) {
  return { value: value, nextNode: null };
}

//create new list
let list = linkedList();

//append to the list
list.append("dog");
list.append("cat");
list.append("parrot");
