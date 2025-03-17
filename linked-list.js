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
        return;
      }

      let currentNode = this.head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
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
      }
      return count;
    },

    //return first node in the list
    headFunc() {
      let currentNode = this.head;
      return currentNode.value;
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
      return currentNode;
    },

    //return node at given index
    at(index) {
      let counter = 1;
      let currentNode = this.head;
      while (counter < index) {
        currentNode = currentNode.nextNode;
        counter++;
      }
      return currentNode;
    },

    //remove node from the end of the list
    pop() {
      if (!this.head) {
        return null;
      }

      let currentNode = this.head;
      //access the next node of the one after the current
      while (currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = null;
      return;
    },

    //returns true or false if the data enters matches a value on one of the nodes
    contains(data) {
      if (!this.head) {
        return null;
      }
      let currentNode = this.head;

      while (currentNode.value !== data) {
        currentNode = currentNode.nextNode;
        if (currentNode.value === data) {
          return true;
        }
        if (currentNode.nextNode === null && currentNode.value !== data) {
          return false;
        }
      }
    },

    //return the index of the node containing that value, or null if it doesn't exist
    find(data) {
      let counter = 1;
      if (!this.head) {
        return null;
      }
      let currentNode = this.head;

      while (currentNode.value !== data) {
        currentNode = currentNode.nextNode;
        counter++;
        if (currentNode.value === data) {
          return counter;
        }
        if (currentNode.nextNode === null && currentNode.value !== data) {
          return null;
        }
      }
    },

    //add node at specific index
    insertAt(value, index) {
      if (index < 0 || index > this.size()) {
        console.log("Index not found");
        return;
      }

      const newNode = node(value);

      if (index === 0) {
        newNode.nextNode = this.head;
        this.head = newNode;
      }

      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }

      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
    },

    //add node at specific index
    removeAt(index) {
      if (index < 0 || index > this.size()) {
        console.log("Index not found");
        return;
      }

      if (index === 0) {
        this.head = this.head.nextNode;
        return;
      }

      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }

      if (currentNode.nextNode) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
      }
    },

    //display as a string
    toString() {
      let listString = "";
      if (!this.head) {
        return null;
      }
      let currentNode = this.head;
      listString = listString.concat(`(${currentNode.value}) -> `);

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        listString = listString.concat(`(${currentNode.value}) -> `);
      }

      listString = listString.concat(`null`);
      return listString;
    },
  };
}

//create new list
let list = linkedList();

//append to the list, then test the functions
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("turtle");
console.log("***** display original list as string *****");
console.log(list.toString());

console.log("***** add new node to the start *****");
list.prepend("bat");
console.log(list.toString());

console.log("***** size of list *****");
console.log(list.size());
console.log(list.toString());

console.log("***** return head node *****");
console.log(list.headFunc());
console.log(list.toString());

console.log("***** return tail node *****");
console.log(list.tail());
console.log(list.toString());

console.log("***** return at given index (3 in this case) *****");
console.log(list.at(3));
console.log(list.toString());

console.log("***** remove last node from list *****");
list.pop();
console.log(list.toString());

console.log(
  "***** true or false if value (cat in this case) is in the list *****"
);
console.log(list.contains("cat"));
console.log(list.toString());

console.log("***** returns index of item if found (cat in this case) *****");
console.log(list.find("cat"));
console.log(list.toString());

console.log(
  "***** insert new node at given value (pig at 2 in this case) *****"
);
list.insertAt("pig", 2);
console.log(list.toString());

console.log("***** remove node at given index (2 in this case) *****");
list.removeAt(2);
console.log(list.toString());
