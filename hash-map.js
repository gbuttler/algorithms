function hashMapFunc(loadFactor, capacity) {
  return {
    table: Array(capacity),

    hash(key) {
      let hashCode = 0;
      const primeNumber = 67;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
      }

      return hashCode;
    },

    //used to set a key value pair in the table
    set(key, value) {
      const index = this.hash(key);
      this.table[index] = [key, value];
    },

    //return the value assigned to this key
    get(key) {
      const index = this.hash(key);

      if (this.table[index] === undefined) {
        return null;
      }
      return this.table[index][1];
    },

    //returns true or false depending on if the key is in the hash map
    has(key) {
      const index = this.hash(key);

      if (this.table[index] === undefined) {
        return false;
      }
      return true;
    },

    //if key exists, remove it
    remove(key) {
      const index = this.hash(key);
      if (this.table[index] === undefined) {
        return false;
      }
      this.table[index] = undefined;
      return true;
    },

    length() {
      let count = 0;
      if (this.table === undefined) {
        return "The length is 0, as this table is empty.";
      } else {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[i] !== undefined) {
            count++;
          }
        }
        return count;
      }
    },

    clear() {
      if (this.table.length > 0) {
        this.table = undefined;
        return "Table has been emptied";
      }
      return "Table was already empty";
    },

    keys() {
      const justKeys = [];

      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          const keyAtIndex = this.table[i][0];
          justKeys.push(keyAtIndex);
        }
      }
      return justKeys;
    },

    values() {
      const justValues = [];

      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          const valueAtIndex = this.table[i][1];
          justValues.push(valueAtIndex);
        }
      }
      return justValues;
    },

    //display the contents of the hash table
    entries() {
      let tableDisplay = [];
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
          const dataAtIndex = this.table[i];
          tableDisplay.push(dataAtIndex);
        }
      }
      return tableDisplay;
    },
  };
}

let hashMap = hashMapFunc(0.75, 67);

hashMap.set("sam", 29);
hashMap.set("grace", 31);
hashMap.set("sid", 100);

// console.log(hashMap.get("sam"));

// console.log(hashMap.has("sam"));
// console.log(hashMap.length());
// console.log(hashMap.clear());
// console.log(hashMap.length());
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());
// let index = hashMap.hash("C");
// if (index) {
//   console.log("yes");
// } else {
//   console.log("no");
// }
