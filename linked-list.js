function node(value) {
  return { value: value, nextNode: null };
}

function linkedList() {
  return {
    head: null,
    length: 0,

    //add new node containing value to the end of the list
    append(value) {
      const newNode = node(value);
      if (!this.head) {
        this.head = newNode;
        this.length++;
        // console.log(this.head);
        return;
      }

      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        // console.log(currentNode);
      }
      currentNode.nextNode = newNode;
      this.length++;
    },

    //add new note to start of list (replacing the head)
    prepend(value) {
      const newNode = node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
      this.length++;
    },

    //use the length variable to count the size of the linked list
    size() {
      let currentNode = this.head;
      let count = 0;
      while (currentNode) {
        count++;
        currentNode = currentNode.nextNode;
        // console.log(currentNode);
      }
      return count;
    },

    //return first node in the list
    headFunc() {
      let currentNode = this.head;
      return console.log(currentNode.value);
    },

    //return last node in the list
    tail() {
      if (!this.head) {
        return null;
      }
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return console.log(currentNode);
    },

    //return node at given index
    at(index) {
      let counter = 1;
      let currentNode = this.head;
      while (counter < index) {
        currentNode = currentNode.nextNode;
        counter++;
      }
      return console.log(currentNode);
    },

    pop() {},
    contains(value) {},
    find(value) {},
    insertAt(value, index) {},
    removeAt() {},
    toString() {},
  };
}

//create new list
let list = linkedList();

//append to the list
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("turtle");
console.log(list);
// console.log("***now add bat to the front***");
// list.prepend("bat");
// console.log(list);
// list.size();
// console.log(list.size());
// list.tail();
list.at(3);
